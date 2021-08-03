
import './App.css';

import AppBar from './components/Nav/AppBar'
import Screen  from './screen/Homescreen'
import CartScreen from './screen/Cartscreen'
import Container from "@material-ui/core/Container";
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Registerscreen from './screen/Registerscreen';
import Loginscreen from './screen/Loginscreen';
import Ordersscreen from './screen/Ordersscreen';
function App() {
  return (
    <div>
    <AppBar/>
   
   <BrowserRouter>
   <Route path="/" exact component={Screen}></Route>
   <Route path="/cart"  exact component={CartScreen}></Route>
   <Route path="/register"  exact component={Registerscreen}></Route>
   <Route path="/Login"  exact component={Loginscreen}></Route>
   <Route path="/orders"  exact component={Ordersscreen}></Route>
   </BrowserRouter>
 
  </div>
  );
}

export default App;
