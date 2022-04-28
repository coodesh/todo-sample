import { useContext } from 'react';
import { AddTask } from '../components/addTask/addTask';
import { AppContext } from '../Providers/GlobalState';
import styles from './styles.module.scss';

export default function Home() {
  const { tasks, dispatch } = useContext(AppContext);

  const verifica = (done) => {
    if(done === true){
      return "line-through"
    }
    else {
      return "none"
    }
  }

  const checked = (id) => {
    dispatch({type: 'checked', id: id});
  }
  
  return (
    <>
    <AddTask/>
       {tasks ? tasks.map((info) => {
        return <div className={styles.DivAll} key={info.id}>
          <input className={styles.SpaceInput} checked={info.done} onChange={() => checked(info.id)} type="checkbox"/>
          <label style={{textDecoration: verifica(info.done)}}>{info.nameTask}</label>
        </div>
      }) : <h1>Carregando...</h1>}
    </>
  )
}
