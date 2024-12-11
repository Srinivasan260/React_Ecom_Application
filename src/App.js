import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cartpage from './Pages/Cartpage';
import Homepage from './Pages/Homepage';
import ProductPage from './Pages/ProductPage';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Loginpage from './Pages/Loginpage';
import Orders from './Pages/Orders';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">


      <Router>
        <div className='Main-content'>
        
          <Navbar />

       

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/login"  element={<Loginpage />}  />
            <Route path="/Signup"  element={<Signup />}  />
            <Route path="/orders"  element={<Orders />}  />
            
          </Routes>

       

          </div>
      
          <Footer />

       
       
         
         

      </Router>















    </div>
  );
}

export default App;
