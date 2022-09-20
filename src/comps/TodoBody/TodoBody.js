import { ListContext } from "../../contexts/ListContext";
import { useContext } from "react";

import DefaultList from "../Lists/DefaultList/DefaultList";
import CreateList from "../Drawers/CreateList";
import SelectList from "../Drawers/SelectList";
import CustomList from "../Lists/CustomList/CustomList";

const TodoBody = () => {
  const {
    defaultList,
    activeList,
    customLists,
    deleteCustomList,
    setActive,
    deleteDefaultTodos,
  } = useContext(ListContext);

  if (activeList === 1)
    return (
      <>
        <CreateList />
        <SelectList />
        <DefaultList
          defaultList={defaultList}
          deleteDefaultTodos={deleteDefaultTodos}
        />
      </>
    );
  else if (activeList !== 1)
    return (
      <>
        <CustomList
          setActive={setActive}
          deleteCustomList={deleteCustomList}
          activeList={activeList}
          customLists={customLists}
        />
        <CreateList />
        <SelectList />
      </>
    );
};

export default TodoBody;
