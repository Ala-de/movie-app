
import './App.css';
import Navgation from'./navgation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from'./footer'
import Apropos  from './apropo'
import Favorie from './favorie'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home'
import Contact from './contact'
import Admin from './Admin'
import {useState} from "react"
import Film from './films';

function App() {
  const [favorie,setFavorie]=useState([])
  const getFavorie=(el)=>{
    favorie.push(el);
    console.log (favorie);

  };

  return (
    <div className="App">
      <BrowserRouter>
      <Navgation/>
          <Route   exact path="/"  component={Home}  />
          <Route  path="/favorie" component={Favorie} favorie={favorie}  />
          <Route path ="/a propos" component={Apropos}/>
          <Route path ="/Contact" component={Contact}/>
          <Route  path="/Admin"component={Admin}/>  
          <Route   path="/films"  component={Film} getFavorie={getFavorie}/>
         <Footer/>
      
      
      </BrowserRouter>
    
     
        </div>
    
  );
}

export default App;
