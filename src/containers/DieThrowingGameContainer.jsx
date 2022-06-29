import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DieThrowingGameComponent from '../components/DieThrowingGameComponent';

export default function DieThrowingGameContainer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" id="header-bar" className='mb-5'>
          <Toolbar>
            <img src="https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/128/die-icon.png" alt='die_icon'></img>
            <h2>Die Throwing Game</h2>
          </Toolbar>
        </AppBar>
      </Box>
      <DieThrowingGameComponent />
    </>
  );
}
