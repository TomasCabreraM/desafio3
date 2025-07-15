import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import { Registro } from './components/Registro';
import { Login } from './components/Login';
import { Cart } from './components/cart';
import { Pizza } from './components/pizza';

function App() {
  return (
    <>
      <Navbar />
      <Pizza/>
      {/* <Home /> */}
      {/* <Cart/> */}
      {/* <Registro /> */}
      {/* <Login/> */}
      <Footer />
    </>
  );
}

export default App;
