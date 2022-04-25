import { useContext } from "react";
import { AddTask } from "../components/addTask/addTask";
import { AppContext } from '../Providers/GlobalState';
import styles from './styles.module.scss';

export default function Active() {
  const { tasks, dispatch } = useContext(AppContext);

  const checked = (id) => {
    dispatch({type: 'checked', id: id});
  }

  return (
    <>
      <AddTask/>
       {tasks.map((info) => {
        if(info.done === false){
          return <div className={styles.DivAll} key={info.id}>
            <input className={styles.SpaceInput} checked={info.done} onChange={() => checked(info.id)} type="checkbox"/>
            <label>{info.nameTask}</label>
          </div>
        }
      })} 
    </>
  )
}
