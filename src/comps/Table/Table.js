import Table from "react-bootstrap/Table";
import { DeleteOutlined } from "@ant-design/icons";

const TableComp = ({ todos, deleteTodo }) => {
  return (
    <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
      <Table size="sm" bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan={1}>ID</th>
            <th colSpan={2}>Added todos</th>
          </tr>
        </thead>
        <tbody style={{ overflow: "scroll" }}>
          {todos?.map(todo => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.value}</td>
                <td>
                  <DeleteOutlined
                    style={{
                      color: "#cb3b3b",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                    onClick={e => {
                      deleteTodo(Number(todo.id));
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComp;
