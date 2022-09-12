import React from 'react';
import { CardActions, Card, CardMedia, Typography, Button, CardContent } from '@mui/material';
import './style.css';

const CardComponent = ({data}) => {

    const {fruitName, details} = data;

  return (
            <Card hoverable='true' className=''>
                    <CardMedia 
                    image='.../public/logo192.png'
                    title='image title'
                    ></CardMedia>
                <CardContent>
                    <Typography variant='h5' color='textPrimary'>{fruitName}</Typography>
                    <Typography variant='subtitle1' color=''>{details}</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'  color='primary'>view</Button>
                </CardActions>
            </Card>
  )
}

export default CardComponent
