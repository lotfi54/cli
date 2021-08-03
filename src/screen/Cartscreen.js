import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { placeOrder} from "../actions/orderActions";
import StickyBox from "react-sticky-box";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  top: {
    marginTop: theme.spacing(12),
  },
  color: {
  backgroundColor: '#f6f6f6',
   marginTop: theme.spacing(2),
  },
  fixed:{
    position : 'fixed',
    marginLeft: theme.spacing(104),
    marginTop: theme.spacing(10),
  },
  link: {
  color: '#fff',
    margin: theme.spacing(1),
  }
}));

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  
 
 const orderstate = useSelector((state) => state.placeOrderReducer)
  const {loading , error , success} = orderstate
  const dispatch = useDispatch();
  const classes = useStyles();
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);


function EmptyBag() {
  if (cartItems == 0) {
    return <Button onClick={() => {
                        dispatch(placeOrder(subtotal));
                      }} variant="outlined" color="primary" disabled>
  Commander
</Button>;
  }

   if (cartItems !== 0) {
    return <Button onClick={() => {
                        dispatch(placeOrder(subtotal));
                      }} variant="contained" color="secondary">
    <Typography  color="secondary" className={classes.link}>
              
               Commander
              
            </Typography>
</Button>;
  }

  return null
}

  return (
    <div>
      <Container className={classes.top} display="flex">
        {loading && (<Loading/>)}
          {success && (<Success success='La commande à été enregistrer' />)}
          {error && (<Error error="La commande n'a pas été enregistré" />)}
        <Grid container spacing={2}>
          <Grid item xs={12}  >
         <Box display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  m={1}
                  p={1}>
         <Box >
           <Typography variant="h5">Dans votre panier </Typography>
         </Box>

          <Box>
            <Chip color="secondary" size="meduim" label={cartItems.length}/>
         </Box>
     
         </Box>
          
            
          {/* <Divider/> */}
          </Grid>

          <Grid item xs={12} sm={6} lg={8}>
            {cartItems.map((item) => {
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  m={1}
                  p={1}
                >
                  <Box width="2%" p={1}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={item.image} />
                    </ListItemAvatar>
                  </Box>
                  <Box
                    width="60%"
                    alignItems="center"
                    justifyContent="flex-start"
                    flexDirection="column"
                    display="flex"
                    p={1}
                  >
                    <Box width="60%">
                    <Typography  variant="h6">
                    {item.name}
                    </Typography>
                    </Box>
                    <Box width="60%">
                      <Typography variant="subtitle1">
                        {" "}
                        Prix: {item.quantity} * {item.prices[0][item.varient]}{" "}
                        = {Math.round(item.price * 100) / 100}
                      </Typography>
                    </Box>
                  </Box>
                  <Box width="30%" p={2} flexDirection="row" display="flex">
                    <RemoveCircleIcon
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    />
                    <Typography>{item.quantity}</Typography>
                    <AddCircleIcon
                      color="secondary"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    />
                  </Box>
                  <Box p={1}>
                    <Chip
                      label={item.varient}
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
                  </Box>

                  <Box p={1}>
                    <IconButton
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
        <Divider/>
          </Grid>
        <Box  className={classes.fixed} width="30%">
          <Grid  className={classes.color} fixed item xs={12} sm={6} lg={12}>
           <List  component="nav" aria-label="main mailbox folders">
        <ListItem  >
          <ListItemText primary={
            <Typography variant="h4">
            Votre commande
            </Typography>
          } />
        </ListItem>
        <ListItem >
          
          <ListItemText primary={
             <Typography variant="h4">
            {subtotal} €
            </Typography>
          }
          
          
           />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <ListItem >

    
             {/* <Button onClick={() => {
                        dispatch(placeOrder(subtotal));
                      }} color="secondary">
            <Typography  color="secondary" className={classes.link}>
              
               Commander
              
            </Typography>
            </Button> */}

            <EmptyBag />
         
        </ListItem>
          </Grid>
        </Box>
       
        </Grid>
      </Container>
    </div>
  );
}
