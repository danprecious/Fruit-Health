import React, {useState} from 'react';
import {Typography, TextField, Container, Autocomplete, Grid} from '@mui/material';
import './style.css'


const Topbar = ({fruitData, search}) => {
    
    const fname = fruitData.map((name, i) =>{
      return  name.fruitName;
    })



  return (
    <Container>
        <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <div className='quote'>
                <Typography variant='subtitle' fontStyle='italic'>
                        "...this is a subtitle"
                </Typography>
            </div>
            <div className=''>
              <input type="text" placeholder='search fruits' className='searchBox' onChange={search} />
            </div>
        </Grid>        
    </Container>
  )
}

export default Topbar
