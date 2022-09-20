import { Card } from "react-bootstrap";
import { Divider, Button } from "antd";
import SingleItem from "./SingeItem";
import React from "react";

const DefaultList = ({ defaultList, deleteDefaultTodos }) => {
  if (defaultList.todos?.length >= 0) {
    return (
      <React.Fragment>
        <Card
          className={"mb-4"}
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor: "#cb3b3b",
          }}
        >
          <Card.Body style={{ position: "relative" }}>
            <Card.Title style={{ color: "#fff" }}>Default todo list</Card.Title>
            <Divider style={{ backgroundColor: "#fff" }} />

            <ul
              className="list_element"
              style={{
                textDecoration: "none",
                listStyle: "none",
                textAlign: "left",
                paddingLeft: 0,
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                fontSize: "1.25rem",
              }}
            >
              {defaultList.todos?.map(todo => {
                return (
                  <SingleItem
                    key={todo?.id}
                    value={todo?.value}
                    finished={todo?.finished}
                    id={todo?.id}
                  />
                );
              })}
            </ul>
          </Card.Body>
        </Card>
        <Button
          type="primary"
          className="clear_btn"
          style={{ color: "#fff", backgroundColor: "#cb3b3b", border: "none" }}
          onClick={() => deleteDefaultTodos()}
        >
          Clear default todos
        </Button>
      </React.Fragment>
    );
  }
};

export default DefaultList;
