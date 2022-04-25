import { useContext } from "react";
import { AddTask } from "../components/addTask/addTask";
import { AppContext } from "../providers/AppContext";
import { DivAll, SpaceInput } from "./styledPages";


export default function All() {
  const { tasks, checked } = useContext(AppContext);

  const verifica = (done) => {
    if(done === true){
      return "line-through"
    }
    else {
      return "none"
    }
  }
  
  return (
    <>    
     <AddTask/>
       {tasks ? tasks.map((info) => {
        return <DivAll key={info.id}>
          <SpaceInput checked={info.done} onChange={() => checked(info.id)} type="checkbox"/>
          <label style={{textDecoration: verifica(info.done)}}> {info.nameTask}</label>
        </DivAll>
      }) : <h1>Adicione sua primeira tarefa</h1>}
    </>
  )
}
