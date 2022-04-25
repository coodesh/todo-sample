import { useContext } from "react";
import { AddTask } from "../components/addTask/addTask";
import { AppContext } from "../providers/AppContext";
import { DivAll, SpaceInput } from "./styledPages";

export default function Active() {
  const { tasks, checked } = useContext(AppContext);

  return (
    <>
      <AddTask/>
       {tasks.map((info) => {
        if(info.done === false){
          return <DivAll key={info.id}>
            <SpaceInput checked={tasks.done} onChange={() => checked(info.id)} type="checkbox"/>
            <label>{info.nameTask}</label>
          </DivAll>
        }
      })} 
    </>
  )
}
