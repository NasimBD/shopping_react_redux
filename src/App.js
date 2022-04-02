import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemsListContainer from './components/Items/ItemsList';
import PrimaryNavContainer from './components/Navbar/PrimaryNavbar';
import CartContainer from './components/Cart/Cart'
import { Footer } from './components/Footer/Footer';
import LoginContainer from './components/Login/Login';
import LogoutContainer from './components/Logout/Logout';
import ItemDetailsContainer from './components/ItemDetails/ItemDetails';
import ModalContainer from './components/Modal';
import { Checkout } from './components/Cart/Checkout';

function App() {
  return (
   <div className="app">
    <PrimaryNavContainer/>
    <Routes>
      <Route path="/" element={<ItemsListContainer />} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/details/:itemId" element={<ItemDetailsContainer />} />
      {/* Or */}
        {/* <Route path="details" element={<ItemsListContainer />} >
        <Route path=":itemId" element={<ItemDetailsContainer />} />
      </Route> */}
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/logout" element={<LogoutContainer />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <ModalContainer/>
    <Footer/>
   </div>
  );
}

export default App;