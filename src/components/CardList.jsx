import React from 'react';
import CardComponent from './Card';
import {Grid, Container} from '@mui/material';

const CardList = ({fruitData, fruitList}) => {
  return (
      <Container>
        <Grid  container spacing={4}>
              { fruitList.map((fruit, i) => {
                  return(
                    <Grid key={i} item xs={12} sm={6} md={4}>
                      <CardComponent
                      fruitName = {fruitList[i].fruitName}
                      details = {fruitList[i].details}
                      data= {fruitList[i]}/>
                    </Grid>
                  )
                })
              }
              </Grid>
      </Container>
  )
}

export default CardList
