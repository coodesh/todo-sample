import { useContext, useState } from 'react';
import { AppContext } from '../../providers/AppContext';
import { Button, Input } from './style';

export function AddTask(){
  const [ name, setTask ] = useState('');
  const { newTask } = useContext(AppContext);
  
  const onChange = (e) => {
    setTask(e.target.value)
  }

  const addNewTask = (e) => {
    e.preventDefault();
    newTask(name);
    setTask('')
  }
    
  return (
  <>
    <form onSubmit={addNewTask}>
      <Input value={name} onChange={onChange} placeholder="Add details"/>
      <Button type='submit' disabled={name.length <= 1}>Add</Button>
    </form>
  </>
  )
}