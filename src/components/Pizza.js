import React,{useState} from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
      all: {
        Width: "100%",
      },
    media: {
        height: "200px",
        width:"200px",
    
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
   
  }));

export default function Pizza({ pizza }) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
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
    return (
      <div>
           <Card  className={classes.root}>
      <CardHeader 
            
           title={pizza.name}
      >
      </CardHeader>

      <Box p={1} display="flex" justifyContent="center" >
      <CardMedia 
    
        className={classes.media}
        image={pizza.image}
        title="Paella dish"
      />
      </Box>
      <Box display="flex" justifyContent="center" className={classes.all} >
      <Box p={1} >
   
       
           <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Taille</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={varient}
              onChange={handleChange}
            >
{pizza.varients.map(varient=>{

    return <MenuItem value={varient} >{varient}</MenuItem>
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

{[...Array(10).keys()].map((x,i)=>{

    return <MenuItem value={i+1} >{i+1}</MenuItem>
})}

              
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box p={1} display="flex"  justifyContent="center">
      <CardActions>
      <Typography>
        <h5>Prix: {pizza.prices[0][varient] * quantity}</h5>  
        </Typography>
        <IconButton color="primary" aria-label="add to shopping cart">
         <ShoppingCartIcon />
        </IconButton>
        Description
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
    
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {pizza.description}
          </Typography>
         
        </CardContent>
      </Collapse>

      </Card>
      </div>
    )
  }
  

