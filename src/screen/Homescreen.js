import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getAllPizzas } from "../actions/pizzaActions";

import { Typography } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  top: {

      marginTop: theme.spacing(10),

  },
}));
export default function Homescreen() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);


  return (
    <Container  className={classes.top}>
      <Grid container spacing={3}>
        {loading ? (
          <div className={classes.root2}>

            <LinearProgress />
          </div>
        ) : error ? (
          <LinearProgress color="secondary"  />
        ) : (
          pizzas.map((pizza) => {
            return (
              <Grid item key={pizza._id} xs={12} sm={6} md={4} lg={4}>
                <Pizza pizza={pizza} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
}
