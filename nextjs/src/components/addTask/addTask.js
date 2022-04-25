import { useContext, useState } from 'react';
import { AppContext } from '../../Providers/GlobalState';
import styles from './styles.module.scss';

export function AddTask(){
  const [ name, setTask ] = useState('');
  const { dispatch } = useContext(AppContext);
  
  const onChange = (e) => {
    setTask(e.target.value)
  }

  const addNewTask = (e) => {
    e.preventDefault();
    dispatch({type: 'newTask', nameTask: name});
    setTask('')
  }
    
  return (
  <>
    <form onSubmit={addNewTask}>
      <input className={styles.input} value={name} onChange={onChange} placeholder="Add details"/>
      <button className={styles.button} type='submit' disabled={name.length <= 1}>Add</button>
    </form>
  </>
  )
}