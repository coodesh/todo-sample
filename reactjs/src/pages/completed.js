import { useContext } from "react";
import Trash from '../assets/img/remove.png';
import { AddTask } from "../components/addTask/addTask";
import { AppContext } from "../providers/AppContext";
import { DeleteAll, DivAll, DivCompleted, SpaceInput, TrashIMG, TrashIMGAll } from "./styledPages";

export default function Completed() {
  const { tasks, removeTask, checked, removeAllTask } = useContext(AppContext);

  return (
    <>
      <AddTask/>
      {tasks.map((info) => {
        if(info.done === true){
          return <DivCompleted key={info.id}>
            <DivAll>
              <SpaceInput checked onChange={() => checked(info.id)} type="checkbox"/>
              <label style={{textDecoration: "line-through"}}>{info.nameTask}</label>
            </DivAll>
              <TrashIMG src={Trash} onClick={() => removeTask(info.id)}/>
          </DivCompleted>
        }})}

      <DeleteAll onClick={removeAllTask}>
        <TrashIMGAll src={Trash}/>
        <p>Delete All</p>
      </DeleteAll>
      
    </>
  )
}
