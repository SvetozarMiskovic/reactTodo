import { Drawer, Button } from "antd";
import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import { Radio } from "antd";

const SelectList = () => {
  const {
    openSelect,
    closeDrawerSelect,
    customLists,
    activeList,
    setActive,
    deleteAllCustomLists,
  } = useContext(ListContext);

  return (
    <>
      <Drawer
        title="Select a list to view and edit"
        visible={openSelect}
        closable={false}
        onClose={closeDrawerSelect}
        placement={"top"}
        height={"auto"}
        headerStyle={{
          backgroundColor: "#cb3b3b",
          border: "none",
        }}
        extra={
          <Button
            style={{
              backgroundColor: "#323232",
              color: "#fff",
              border: "none",
            }}
            onClick={() => {
              deleteAllCustomLists();
              setActive(1);
            }}
          >
            Clear all
          </Button>
        }
        bodyStyle={{
          backgroundColor: "#323232",
          color: "#fff",
        }}
      >
        <Radio.Group
          style={{
            display: "flex",
            gap: "1.1rem",
          }}
          className="list_buttons"
          value={activeList}
          onChange={e => setActive(e.target.value)}
        >
          <div className="default_list">
            <Radio value={1}>Default List</Radio>
          </div>
          {customLists?.map(list => {
            return (
              <div className="custom_list" key={list.id}>
                <Radio value={list.id}>{list.title}</Radio>
              </div>
            );
          })}
        </Radio.Group>
      </Drawer>
    </>
  );
};

export default SelectList;
