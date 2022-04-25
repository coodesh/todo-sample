import { createContext } from "react";
import ReducerTasks from "./functions";
import useLocalStorage from "./useLocalStorage";

export const AppContext = createContext();

const GlobalState = ({children}) => {
  const [ tasks, dispatch ] = useLocalStorage('nextTasks', ReducerTasks);

  const value = {
    tasks,
    dispatch
  }
    
  return <>
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  </>
}

export default GlobalState;
