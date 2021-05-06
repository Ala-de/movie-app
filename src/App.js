import logo from './logo.svg';
import './App.css';
import Navgation from'./navgation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Film from './films'
import {Container} from 'react-bootstrap'
import Footer from'./footer'
import Apropos  from './apropo'
import Favorie from './favorie'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navgation/>
<Route   exact path="/"  component={Home}   />

<Route  path="/favorie" component={Favorie}  />
<Route path ="/a propos" component={Apropos }/>
      <Footer/>
     
      </BrowserRouter>
      {/* <Navgation/>
      <div ClassName="dfl">
   <Container className="d-flex flex-wrap">
   <Film/>
   </Container>
   <Apropos/>
   <Footer/> */}
        </div>
    
  );
}

export default App;
