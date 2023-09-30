import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './Components/navbar';
import Users from './Components/Users';
import {Container} from 'react-bootstrap';



function App() {
  return (
    <div className='App'>
    
   
    <NavBarComponent/>
    <Container>
    <Users/>
    </Container>
  
 
    </div>
  );
}

export default App;
