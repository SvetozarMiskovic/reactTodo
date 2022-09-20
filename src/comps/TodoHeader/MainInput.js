import { useRef, useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import { FileDoneOutlined } from "@ant-design/icons";
import { generateId } from "../../utils/generateId";
import "../../styles/MainInput.css";

const MainInput = () => {
  const todo = useRef();
  const { addDefaultTask, activeList, addCustomTask } = useContext(ListContext);

  return (
    <div className="main_input">
      <input
        type="text"
        placeholder="ex: Buy eggs"
        className="dtask_input"
        ref={todo}
      />

      <FileDoneOutlined
        className="add_task_btn"
        style={{ fontSize: "1.9rem", cursor: "pointer" }}
        onClick={() => {
          if (todo.current.value) {
            if (activeList === 1) {
              const id = generateId();
              addDefaultTask(id, todo.current.value, false);
              todo.current.value = "";
            } else {
              const id = generateId();
              addCustomTask(todo.current.value, id);
              todo.current.value = "";
            }
          }

          // make the popup for successfull adding of task and for failure
        }}
      />
    </div>
  );
};

export default MainInput;
