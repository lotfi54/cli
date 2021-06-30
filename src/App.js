
import './App.css';

import AppBar from './components/Nav/AppBar'
import Screen  from './screen/Homescreen'
import CartScreen from './screen/Cartscreen'
import Container from "@material-ui/core/Container";
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
    <AppBar/>
    <Container>
   <BrowserRouter>
   <Route path="/" exact component={Screen}></Route>
   <Route path="/cart"  exact component={CartScreen}></Route>
   </BrowserRouter>
   </Container>
  </div>
  );
}

export default App;
