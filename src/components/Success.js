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

   top: {

      marginTop: theme.spacing(12),

  }
}));
export default function Success({ success}) {
      const classes = useStyles();
  return (
    <div>
    <Container   maxWidth="lg">
  
      <Alert severity="success">{success}</Alert>
      
      </Container>
    </div>
  );
}