import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import CardActions from "@material-ui/core/CardActions";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addToCart } from "../actions/cartActions";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  all: {
    Width: "100%",
  },
  media: {
    height: "200px",
    width: "200px",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 125,
  },
  footer: {
    spacing: 3,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Pizza({ pizza }) {


  // const varients = ["small", "large", "medium"];
  // const prices= [
  //   {
  //     small: 8.7,
  //     large: 16.85,
  //     medium: 12,
  //   },
  // ];
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event) => {
    setVarient(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch()

  function addtocart(){
      dispatch(addToCart(pizza,quantity,varient))
  }

  

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton onClick={addtocart} aria-label="share">
              <ShoppingCartIcon color="primary"  />
            </IconButton>
          }
          title={pizza.name}
        ></CardHeader>

        <Box p={1} display="flex" justifyContent="center">
          <CardMedia
            className={classes.media}
            image={pizza.image}
            title="Paella dish"
          />
        </Box>
        <Box display="flex" justifyContent="center" className={classes.all}>
          <Box p={1}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Taille</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={varient}
                onChange={handleChange}
              >
                {pizza.varients.map((varient) => {
                  return <MenuItem value={varient}>{varient}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box p={1}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Quantité</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                onChange={handleChangeQuantity}
              >
                {[...Array(10).keys()].map((x, i) => {
                  return <MenuItem value={i + 1}>{i + 1}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <CardActions disableSpacing className={classes.footer}>
          <Typography>Prix: 
          {Math.round(pizza.prices[0][varient] * quantity*100)/100}
            
          
          </Typography>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{pizza.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
