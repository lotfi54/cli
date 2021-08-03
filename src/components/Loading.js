import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  
  const [progress, setProgress] = React.useState(0);

React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);


    const classes = useStyles();
  return (
   <div className={classes.root}>
   <Container maxWidth="xl">
      <LinearProgress variant="determinate" value={progress} />
      
      {/* <LinearProgress /> */}
   </Container>
     
    </div>
  );
}