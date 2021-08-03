import React from "react";
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import { makeStyles,Theme } from '@material-ui/core/styles';

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
export default function Error({ error }) {
      const classes = useStyles();
  return (
    <div>
    <Container component="main"  maxWidth="xs">
    <div className={classes.paper}>
      <Alert severity="error">{error}</Alert>
      </div>
      </Container>
    </div>
  );
}