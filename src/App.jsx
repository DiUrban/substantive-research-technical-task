import { useEffect } from "react";
import "./styles.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./features/interactions/interactionsSlice";
import { fetchData } from "./util/fetchData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchData());
    setLoading(false);
  }, []);
  const loading = useSelector((store) => store.interactions.loading);
  const sectors = useSelector((store) => store.interactions.sectors);
  if (loading) {
    return (
      <body className="App">
        <div className="AppWrapper">
          <h1>Loading</h1>
        </div>
      </body>
    );
  } else {
    return (
      <body className="App">
        <div className="AppWrapper">
          <Sidebar sectors={sectors} />
          <Main />
        </div>
      </body>
    );
  }
}

export default App;
