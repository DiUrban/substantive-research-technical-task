import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setError,
  setInteractions,
  setLoading,
  setSectors,
} from "../features/interactions/interactionsSlice";
export const fetchData = createAsyncThunk(
  "data/fetch",
  async (_, { dispatch }) => {
    try {
      const res = await fetch(
        "http://substantiveresearch.pythonanywhere.com/",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      const groupedInteractions = data.reduce((acc, item) => {
        if (!acc[item.name]) {
          acc[item.name] = [];
        }
        acc[item.name].push(item);
        return acc;
      }, {});
      const listSectors = Object.keys(groupedInteractions);
      listSectors.forEach((item) => {
        groupedInteractions[item].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      });
      listSectors.unshift("All");
      dispatch(setInteractions(groupedInteractions));
      dispatch(setSectors(listSectors));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  }
);
