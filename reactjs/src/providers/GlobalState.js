import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const GlobalState = ({children}) => {
  const [ tasks, setTasks ] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);

  const newTask = (name) => {   
    setTasks([...tasks, { id: Math.random(), nameTask: name, done: false }]);
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((info) => info.id !== id));
  };

  const removeAllTask = () => {
    setTasks(tasks.filter((info) => !info.done))
  }

  const checked = (id) => {
    const changeDone = tasks.map((info) => {
        if (info.id === id) {
          return {
            ...info,
            done: !info.done,
          };
        }
        return info;
      })
      setTasks(changeDone)
  };

  useEffect(() => {
    localStorage.setItem('yourTasks', JSON.stringify(tasks));
  }, [tasks])

  const value = {
    tasks,
    setTasks,
    newTask,
    removeTask,
    checked,
    removeAllTask,
  }
    
  return <>
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  </>
}

export default GlobalState;
