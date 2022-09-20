import { useContext, useRef, useState } from "react";
import { ListContext } from "../../contexts/ListContext";
import { Drawer, Button } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";
import "../../styles/TodoHeader.css";
import { generateId } from "../../utils/generateId";
import TableComp from "../Table/Table";

const CreateList = () => {
  const { openCreate, closeDrawerCreate, addNewList } = useContext(ListContext);
  const titleRef = useRef();
  const todoRef = useRef();
  const [todos, setTodos] = useState([]);

  const saveTodos = value => {
    setTodos(prev => {
      let single = { id: generateId(), value: value, finished: false };
      return [...prev, single];
    });
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== Number(id));

    setTodos([...newTodos]);
  };

  const resetTodos = () => {
    setTodos([]);
  };
  return (
    <>
      <Drawer
        title="Create a new Todo list"
        placement={"top"}
        onClose={closeDrawerCreate}
        visible={openCreate}
        closable={false}
        height={"auto"}
        headerStyle={{
          backgroundColor: "#cb3b3b",
          border: "none",
        }}
        bodyStyle={{
          backgroundColor: "#323232",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          className="top_part"
          style={{
            backgroundColor: "#323232",
            display: "flex",
            gap: "2rem",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div className="name_part">
            <h4 style={{ color: "#fff" }}>Name your list</h4>
            <input
              ref={titleRef}
              style={{
                color: "#323232",
                border: "none",
                outline: "none",
                appearance: "none",
                padding: "0.375rem 0.75rem",

                borderRadius: "0.375rem",
              }}
              type="text"
              placeholder="i.e. Groceries, Chores..."
            />
          </div>
          <div
            className="add_part"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                color: "#fff",

                alignSelf: "flex-start",
              }}
            >
              Add todo
            </h4>
            <div
              className="drawer_add_task"
              style={{
                display: "flex",
              }}
            >
              <input
                style={{
                  color: "#323232",
                  border: "none",
                  outline: "none",
                  appearance: "none",
                  padding: "0.375rem 0.75rem",

                  borderRadius: "0.375rem",
                  alignSelf: "flex-start",
                }}
                ref={todoRef}
                type="text"
                placeholder="i.e. Eggs, Bannana, Email the customer..."
              />

              <FileDoneOutlined
                className="add_task_btn2"
                style={{
                  fontSize: "1.9rem",
                  cursor: "pointer",
                  marginLeft: "1rem",
                  alignSelf: "flex-start",
                }}
                onClick={() => {
                  if (todoRef.current.value) saveTodos(todoRef.current.value);
                  todoRef.current.value = "";
                }}
              />
            </div>
            <p
              style={{
                position: "relative",
                color: "#fff",
                fontStyle: "italic",
                alignSelf: "flex-start",
              }}
            >
              You can add todos now or in the main screen.
            </p>
          </div>
          <div className="added_part">
            <h4 style={{ color: "#fff" }}>Currently added todos</h4>
            <TableComp deleteTodo={deleteTodo} todos={todos} />
          </div>
        </div>
        <div className="lower_body_part">
          <Button
            style={{
              backgroundColor: "#cb3b3b",
              outline: "none",
              border: "none",
            }}
            type="primary"
            onClick={() => {
              if (titleRef.current.value) {
                addNewList({
                  id: generateId(),
                  title: titleRef.current.value,
                  todos: todos ?? [],
                });
                titleRef.current.value = "";
                todoRef.current.value = "";
                setTodos([]);
                closeDrawerCreate();
              }
            }}
          >
            Confirm
          </Button>
          <Button
            type="primary"
            style={{
              backgroundColor: "#cb3b3b",
              border: "none",
              marginLeft: "2rem",
            }}
            onClick={() => resetTodos()}
          >
            Clear all todos
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default CreateList;
