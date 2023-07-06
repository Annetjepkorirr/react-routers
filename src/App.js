import logo from './logo.svg';
import Product from './Products';
import Navigationbar from './Navigationbar';
import'./App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
   <div>
 
    <Navigationbar/>
    <BrowserRouter>
    <Routes>
      
      <Route path='/product' element ={<Product/>}/>
      <Route path='/login' element ={<Login/>}/>
    </Routes>
    </BrowserRouter>

    
   </div>
  );
}

export default App;
