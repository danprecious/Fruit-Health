import React from 'react';
import AppBar from '@mui/material/Appbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


import './style.css'


const Navbar = () => {
  return (
      <>
        <CssBaseline>
            <AppBar position='relative' className='navbar'>
               <Typography variant='h6'>Fruit&Health</Typography>   
            </AppBar>  
        </CssBaseline>
      </>
  )
}

export default Navbar;