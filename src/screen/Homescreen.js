import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getAllPizzas } from "../actions/pizzaActions";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Loading from "../../src/components/Loading"
import Error from "../../src/components/Error"
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

  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;





  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);


  return (
    <Container maxWidth="lg"  className={classes.top}>
      <Grid container spacing={3}>
        {loading ? (
          <Container maxWidth="lg">
        <Loading/>
        </Container>
        ) : error ? (
          <Error error ="Une erreur c'est produite"/>
        ):(
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
