import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/product/cart" element={<Cart />} />
          
      </Routes>
      
    </div>
  );
}

export default App;
