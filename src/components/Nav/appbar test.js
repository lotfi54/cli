import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";
import { logoutUser } from "../../actions/userActions";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  log: {
    color: "#000",
  },

  title: {
    flexGrow: 3,
    color: "#000",
  },
  AppBar: {
    background: "#fff",
    // boxShadow: '5px 3px 5px 10px',
    // boxShadow: rgba(0, 0, 0, 0.1)
    // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
    // boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 1px",
  },
  link: {
    color: "#000",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const defaultProps = {
  color: "secondary",
  children: <LocalMallRoundedIcon />,
};

const StyledBadge = withStyles((theme) => ({
  badge: {
    padding: "0 0px",
    fontSize: 2,
  },
}))(Badge);

export default function ButtonAppBar() {
  const classes = useStyles();
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
 const dispatch = useDispatch()
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="primary" className={classes.title}>
            <Link href="/" className={classes.link}>
              Delivro Pizza
            </Link>
          </Typography>
          {/* <Button className={classes.log} color="primary">
            <Link href="/register" className={classes.link}>
              Register
            </Link>
          </Button> */}

          {currentUser ? (
            <div>
             <Button className={classes.log} color="primary">
            <Typography  color="primary" className={classes.link}>
              
                {currentUser.name}
              
            </Typography>
            </Button>
           
            <IconButton className={classes.log} color="primary">
            
              
              
             <Link onClick={()=>{dispatch(logoutUser())}}><ExitToAppIcon/> </Link>
              
            
            </IconButton>

            </div>
          

          ) : (
            <Button className={classes.log} color="primary">
              <Link href="/login" className={classes.link}>
                Login
              </Link>
            </Button>
          )}

          <Link className={classes.link} href="/cart">
            <IconButton aria-label="cart">
              <Badge
                color="secondary"
                badgeContent={cartstate.cartItems.length}
              >
                <LocalMallRoundedIcon className={classes.panier} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
