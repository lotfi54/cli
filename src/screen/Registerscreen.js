import React,{useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { registerUser } from '../actions/userActions';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'


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

  }
}));

export default function Registerscreen() {
  const classes = useStyles();

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [cpassword, setcpassword] = useState('')
const registerstate = useSelector(state =>state.registerUserReducer)
const {error, loading, success} = registerstate
const dispatch = useDispatch()

const nameChange = (event) => {
    setname(event.target.value);
  };

  const emailChange = (event) => {
    setemail(event.target.value);
  };

  const passwordChange = (event) => {
    setpassword(event.target.value);
  };

    const cpasswordChange = (event) => {
    setcpassword(event.target.value);
  };


  function register(){

      if(password!==cpassword)
      {
          alert("passwords not matched")
         
      }
      else{
          const user={
              name,
              email,
              password
          }
          // console.log(user);
          dispatch(registerUser(user))
          
      }

  }

  // const required = (value) => {
  // if (!value) {
  //   return (
  //     <div className="alert alert-danger" role="alert">
  //       This field is required!
  //     </div>
  //   );
  // }
  
  const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


  return (
    <Container component="main" className={classes.top} maxWidth="xs">
    
          {loading && (<Loading/>)}
          {success && (<Success success='User Registered Successfully' />)}
          {error && (<Error error='Email already registred' />)}
      <CssBaseline />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Sign in
        </Typography>
          
         <Typography>
          {/* {error && (<Error error="L'email renseigné exite déjà" />)} */}
          </Typography> 
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nom"
            label="Nom"
            name="nom"
            autoComplete="Nom"
            autoFocus
            value={name}
            onChange={nameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
           
            value={email}
            onChange={emailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={passwordChange}
             validations={[ vpassword]}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirmer votre mot de passe"
            type="password"
            id="confpassword"
            autoComplete="current-password confirmation"
            value={cpassword}
            onChange={cpasswordChange}
             validations={[ vpassword]}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign In
          </Button>
          
        
      </div>
     
    </Container>
  );
}