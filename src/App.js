import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Customers from './components/Customers';
import Favourites from './components/Favourites';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
