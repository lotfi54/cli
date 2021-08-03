import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { makeStyles,Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
   top: {

      marginTop: theme.spacing(12),

  },
    color: {
  backgroundColor: '#f6f6f6',
   marginTop: theme.spacing(5),
  },
  chip: {
  colorSecondary: '#84a98c',
   
  }
}));
export default function Ordesscreen() {
    const dispatch = useDispatch()
       const orderstate = useSelector(state=>state.getUserOrdersReducer)
        const {orders,loading , error} = orderstate
      const classes = useStyles();

      useEffect(() => {

        dispatch(getUserOrders())
      
    }, [])


function countOrders () {
   return <Typography variant="h6">Nombre de commandes: <Chip classes={classes.chip}   size="meduim" label={orders.length} /></Typography>
}



    return (
        <div>
            <Container className={classes.top} display="flex">
             {loading && (<Loading/>)}
                {error && (<Error error='Il y a une erreur, vous ne pouvez pas accédez à cette page'/>)}



      
         <Grid container spacing={4}>
        
        <Grid item xs>
           <Box display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  m={1}
                  p={1}>
         <Box >
           <Typography variant="h4">Vos commandes </Typography>
         </Box>

         <Box >
         {/* <Chip label={countOrders}  m={1}
                  p={2} />   */}
                     {countOrders}
         </Box>




          </Box>

          <Box className={classes.color}
                  display="flex"
                //   alignItems="center"
                  justifyContent="flex-center"
                  m={1}
                  p={2}
                >

                 <Box align="center"  width="100%"><Typography align="center" variant="h5">Articles</Typography>   </Box>
                 <Box align="center" width="100%"><Typography align="center" variant="h5">Prix</Typography>   </Box>
                 <Box align="center" width="100%"><Typography align="center" variant="h5">Total</Typography>   </Box>

                </Box>
               {orders && orders.map(order=>{
        return  <Box className={classes.color}
                  display="flex"
                //   alignItems="center"
                  justifyContent="flex-center"
                  m={1}
                  p={2}
                >
           <Box width="100%"  justifyContent="flex-center"   flexDirection="column" display="flex">
                  <Box  width="60%">
                 
                   
                    
                      </Box>
{order.orderItems.map(item=>{
                     return <Box align="center"   m={1}
                  p={0} width="100%">
                     <Typography align="center" variant="subtile1"> {item.name}</Typography>
                      </Box>
 })}
            </Box>
             <Box width="100%"  flexDirection="column" display="flex">

                   <Box   width="100%">
                     
                      </Box>
                      {order.orderItems.map(item=>{
                     return <Box align="center"  m={1}
                  p={0} width="100%">
                     <Chip variant="outlined" color="primary" label={item.varient}/>  * {item.quantity} = {item.price}
                      </Box>
                      })}
            </Box>


            
            
            


<Box width="100%"    flexDirection="column" display="flex">

                   <Box  width="60%">
                      
                      </Box>
                     
                     <Box align="center"  m={1}
                  p={0} width="100%">
                     
                      <Typography align="center" variant="h5"> {order.orderAmount} €</Typography>
                      </Box>
                     
            </Box>

        </Box>

  
                })}
                    
                  
        </Grid>
      </Grid>

            </Container>
        </div>
    )
}
