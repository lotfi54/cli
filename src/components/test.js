import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@material-ui/core/CardMedia";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    top: {

        marginTop: theme.spacing(12),

    },
}));

export default function Cartscreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems



    const classes = useStyles();
    return (
        <Container className={classes.top}>
            <Grid container spacing={3}>
              {/* {cartItems.map(item => {
                    return <div> 
                        { item.name }

                    </div>
                    
                   
                })} */}

<Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Liste de la commande
          </Typography>
          <List className={classes.root}>
          {cartItems.map(item => {
     return  <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.inline}
                color="textPrimary"
              >
                Price: {item.quantity} * {item.prices[0][item.varient]} =  {Math.round(item.price*100)/100}
              </Typography>
              
         }
        />
     <Chip label={item.varient} variant="outlined" color="primary" size="small" />
         <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  <Divider variant="inset" component="li" />
      </ListItem>
    })}
    
    
    </List>
        </Grid>

            </Grid>
        </Container>
    )
}
