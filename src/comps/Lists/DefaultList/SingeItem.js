import "../../../styles/SingleItem.css";
import { ListContext } from "../../../contexts/ListContext";
import { useContext } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { activeTaskStyle, finishTaskStyle } from "../../../styles/taskStyles";

const SingleItem = ({ value, finished, id }) => {
  const toggleCB = e => {
    strikeDefaultText(e.target.id);
  };

  const toggleCCB = e => {
    strikeCustomText(e.target.id);
  };
  const {
    strikeDefaultText,
    deleteDefaultTodo,
    deleteCustomTodo,
    strikeCustomText,
    activeList,
  } = useContext(ListContext);

  return (
    <li className="single_item" id={id}>
      <span
        style={{
          margin: "0.6rem",
        }}
        className="single_item_checkbox"
      >
        <input
          id={id}
          type={"checkbox"}
          onChange={e => {
            if (activeList === 1) {
              toggleCB(e);
            } else {
              toggleCCB(e);
            }
          }}
          checked={finished}
          style={{
            width: "18px",
            height: "18px",
            cursor: "pointer",
            accentColor: "#323232",
          }}
        />
      </span>
      <span
        style={finished ? finishTaskStyle : activeTaskStyle}
        className="single_item_text"
      >
        {value}
      </span>

      <DeleteOutlined
        className="single_item_deletebtn remove_btn"
        style={{
          cursor: "pointer",
          margin: "0.6rem",
          fontSize: "24px",
        }}
        onClick={() => {
          if (activeList === 1) deleteDefaultTodo(id);
          else deleteCustomTodo(id);
        }}
      />
    </li>
  );
};

export default SingleItem;
