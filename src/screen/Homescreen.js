import React from 'react'
import pizzas from '../pizzasdata'
import Pizza  from '../components/Pizza'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Homescreen() {
 
    return (
        
            <Container>
        <Grid container spacing={3}>
     
{pizzas.map(pizza=>{
    return <Grid  item key={pizza.name}  xs={12} sm={6} md={4} lg={4}>
        
            <Pizza pizza={pizza}/>
       
      </Grid>

})}
         
         </Grid>
         </Container>
    )
}