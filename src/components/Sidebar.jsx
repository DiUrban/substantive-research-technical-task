import { useDispatch } from "react-redux";
import { alter } from "../features/selector/selectorSlice";
function Sidebar(props) {
  const dispatch = useDispatch();
  const handleClick = (interaction) => {
    dispatch(alter(interaction));
  };

  return (
    <div className="sidebarWrapper">
      <nav className="sidebar">
        {props.sectors.map((sector) => {
          return (
            <button
              key={sector}
              onClick={() => handleClick(sector)}
              className="button"
            >
              {sector}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
