import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar:{
    background: '#ffffff',
    boxShadow: '0 3px 5px 2px ',
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}  position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="primary" className={classes.title}>
            Delivro Pizza
          </Typography>
          <Button color="primary">Login</Button>
        
          <IconButton color="primary" aria-label="add to shopping cart">
         <LocalMallRoundedIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
