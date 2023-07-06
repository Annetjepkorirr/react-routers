import logo from './logo.svg';
import Product from './Products';
import Navigationbar from './Navigationbar';
import'./App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <div>
    <Navigationbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element ={<Product/>}/>
      <Route path='/home' element ={<Product/>}/>
      <Route path='/about' element ={<Product/>}/>
    </Routes>
    </BrowserRouter>

    
   </div>
  );
}

export default App;
