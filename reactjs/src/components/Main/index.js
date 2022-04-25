import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Active from '../../pages/active';
import All from '../../pages/all';
import Completed from '../../pages/completed';
import { Header } from '../Header';

export function Pages() {
  const [value, setValue] = useState('one');

  const handleChange = (e, newEvent) => {
    setValue(newEvent);
  };

  const changeScreen = () => {
    switch(value){
      case 'two':
				return <Active/>;
			case 'three':
				return <Completed/>;
			default:
				return <All/>;
    }
  }

  return <>
    <Header/>

    <Box>
      <Tabs
        centered
        value={value}
        onChange={handleChange}>
          
        <Tab value="one" label="All" />
        <Tab value="two" label="Active" />
        <Tab value="three" label="Completed" />
      </Tabs>
    </Box>

    <div>
      {changeScreen()}
    </div>
  </>
}
