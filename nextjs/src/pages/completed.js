import Image from 'next/image';
import { useContext } from 'react';
import Trash from '../assets/img/remove.png';
import { AddTask } from '../components/addTask/addTask';
import { AppContext } from '../Providers/GlobalState';
import styles from './styles.module.scss';

export default function Completed() {
  const { tasks, dispatch } = useContext(AppContext);

  const checked = (id) => {
    dispatch({type: 'checked', id: id});
  }

  const removeTask = (id) => {
    dispatch({type: 'removeTask', id: id});
  }

  const removeAllTask = () => {
    dispatch({type: 'removeAllTask'});
  }
  
  return (
    <>
    <AddTask/>
       {tasks ? tasks.map((info) => {
        if(info.done === true){
        return <div className={styles.DivCompleted} key={info.id}>
          <div className={styles.DivAll}>
            <input className={styles.SpaceInput} checked onChange={() => checked(info.id)} type="checkbox"/>
            <label style={{textDecoration: "line-through"}}>{info.nameTask}</label>
          </div>
          <Image src={Trash} className={styles.TrashIMG} onClick={() => removeTask(info.id)} width="20" height="20"/>
        </div>
        }}) : <h1>Adicione sua primeira tarefa</h1>}

        <div className={styles.DeleteAll} onClick={removeAllTask}>
          <Image src={Trash} className={styles.TrashIMGAll} width="20" height="25"/>
          <p>Delete All</p>
        </div>
    </>
  )
}
