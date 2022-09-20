import { Card } from "react-bootstrap";
import { Button, Divider } from "antd";
import SingleItem from "../DefaultList/SingeItem";
import React from "react";

const CustomList = ({
  customLists,
  activeList,
  deleteCustomList,
  setActive,
}) => {
  return customLists.map(list => {
    if (list.id === activeList) {
      return (
        <React.Fragment key={list.id}>
          <Card
            className={"mb-4"}
            style={{
              maxWidth: "900px",
              width: "100%",
              backgroundColor: "#cb3b3b",
            }}
          >
            <Card.Body style={{ position: "relative" }}>
              <Card.Title style={{ color: "#fff" }}>{list.title}</Card.Title>
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
                {list.todos?.map(todo => {
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
            style={{ color: "fff", backgroundColor: "#cb3b3b", border: "none" }}
            onClick={() => {
              deleteCustomList(list.id);
              setActive(1);
            }}
            className="clear_btn"
          >
            Delete List
          </Button>
        </React.Fragment>
      );
    }
    return null;
  });
};

export default CustomList;
