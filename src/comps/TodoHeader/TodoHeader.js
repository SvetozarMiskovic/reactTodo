import { Card } from "react-bootstrap";
import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import MainInput from "./MainInput";
import { MoreOutlined } from "@ant-design/icons";
import "../../styles/TodoHeader.css";
import { Dropdown, Divider, Menu } from "antd";

const TodoHeader = () => {
  const { openDrawerCreate, openDrawerSelect } = useContext(ListContext);

  // MENU FOR THE DROPDOWN
  const menu = (
    <Menu
      style={{ margin: 0 }}
      items={[
        {
          label: "Create todo list",
          key: "clist",
          onClick: openDrawerCreate,
        },
        {
          label: "Pick list to edit",
          key: "plte",
          onClick: openDrawerSelect,
        },
      ]}
    />
  );

  return (
    <Card
      style={{ maxWidth: "900px", width: "100%", backgroundColor: "#cb3b3b" }}
      className="mt-2"
    >
      <Card.Body style={{ position: "relative" }}>
        <Dropdown
          overlay={menu}
          style={{ color: "#fff" }}
          trigger={["click"]}
          arrow
        >
          <MoreOutlined
            className="more_btn"
            style={{
              position: "absolute",
              right: 10,
              top: 2,
              transform: "rotate(90deg)",
              fontSize: "2rem",
            }}
          />
        </Dropdown>
        <Card.Title style={{ color: "white" }}>To do List</Card.Title>

        <Card.Subtitle className="mb-3 sub_text">
          "Never memorize something that you can look up" - Albert Einstein
        </Card.Subtitle>
        <Divider style={{ backgroundColor: "#fff" }} />
        <MainInput />
      </Card.Body>
    </Card>
  );
};

export default TodoHeader;
