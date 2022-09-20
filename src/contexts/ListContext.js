import { useState, createContext, useEffect } from "react";

import { readFromLS, readCLFromLS, readALFromLS } from "../utils/readFromLS";
import { wtls, wtlsal, wtlscl } from "../utils/writeToLS";

export const ListContext = createContext();

export const ListContextProvider = props => {
  const [activeList, setActiveList] = useState(() => {
    const res = readALFromLS();

    return res ? res : 1;
  });

  const [defaultList, setDefaultList] = useState(() => {
    const res = readFromLS();

    return res ? res : { id: 1, title: "Default todo list", todos: [] };
  });
  const [customLists, setCustomLists] = useState(() => {
    const res = readCLFromLS();

    return res ? res : [];
  });

  // SET THE ACTIVE LIST

  const setActive = value => {
    setActiveList(value);
    setOpenSelect(false);
  };

  // CREATE DRAWER START //
  const [openCreate, setOpenCreate] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);

  const closeDrawerCreate = () => {
    setOpenCreate(false);
  };

  const openDrawerCreate = () => {
    setOpenCreate(true);
  };

  const closeDrawerSelect = () => {
    setOpenSelect(false);
  };

  const openDrawerSelect = () => {
    setOpenSelect(true);
  };
  // CREATE DRAWER END//

  // WRITE TO LOCAL STORAGE //
  useEffect(() => {
    wtls(defaultList);
  }, [defaultList]);

  useEffect(() => {
    wtlscl(customLists);
  }, [customLists]);

  useEffect(() => {
    wtlsal(activeList);
  }, [activeList]);

  //ADD A TASK TO THE DEFAULT LIST
  const addDefaultTask = (id, value, finished) => {
    setDefaultList(prev => {
      return {
        ...prev,
        todos: [...prev.todos, { id: id, value: value, finished: finished }],
      };
    });
  };

  const addCustomTask = (value, id) => {
    const newList = customLists.map(list => {
      if (list.id === activeList) {
        list.todos = [...list.todos, { id: id, value: value, finished: false }];

        return list;
      }
      return list;
    });

    setCustomLists(newList);
  };

  const addNewList = list => {
    setCustomLists(prev => {
      return [...prev, list];
    });
  };
  // LINE THROUGH TEXT
  const strikeDefaultText = id => {
    setDefaultList(prev => {
      const newList = defaultList.todos?.map(todo => {
        if (todo.id === Number(id)) {
          todo.finished = !todo.finished;
          return todo;
        }
        return todo;
      });

      return { ...prev, todos: newList };
    });
  };

  const strikeCustomText = id => {
    const newList = customLists.map(list => {
      if (list.id === activeList) {
        const newTodos = list.todos.map(todo => {
          if (todo.id === Number(id)) {
            todo.finished = !todo.finished;

            return todo;
          }
          return todo;
        });

        list.todos = newTodos;
        return list;
      }
      return list;
    });
    setCustomLists(newList);
  };
  // DELETE A TODO IN DEFAULT LIST
  const deleteDefaultTodo = id => {
    setDefaultList(prev => {
      const updatedList = defaultList.todos?.filter(
        list => list.id !== Number(id)
      );

      return { ...prev, todos: updatedList };
    });
  };

  const deleteCustomTodo = id => {
    const newLists = customLists.map(list => {
      if (list.id === activeList) {
        const newTodos = list.todos.filter(todo => todo.id !== Number(id));
        list.todos = newTodos;
        return list;
      }
      return list;
    });
    setCustomLists(newLists);
  };

  const deleteAllCustomLists = () => {
    setCustomLists([]);
  };

  const deleteCustomList = id => {
    const newList = customLists.filter(list => list.id !== Number(id));
    setCustomLists([...newList]);
  };

  const deleteDefaultTodos = () => {
    setDefaultList(prev => {
      return { ...prev, todos: [] };
    });
  };

  return (
    <ListContext.Provider
      value={{
        defaultList,
        setDefaultList,
        addDefaultTask,
        strikeDefaultText,
        deleteDefaultTodo,
        openCreate,
        closeDrawerCreate,
        openDrawerCreate,
        openSelect,
        closeDrawerSelect,
        openDrawerSelect,
        customLists,
        activeList,
        setActive,
        addCustomTask,
        strikeCustomText,
        deleteCustomTodo,
        addNewList,
        deleteAllCustomLists,
        deleteCustomList,
        deleteDefaultTodos,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
