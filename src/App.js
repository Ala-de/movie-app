import logo from './logo.svg';
import './App.css';
import Navgation from'./navgation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Film from './films'
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navgation/>
      <div ClassName="dfl">
   <Container className="d-flex flex-wrap">
   <Film/>
   </Container>
        </div>
    </div>
  );
}

export default App;
