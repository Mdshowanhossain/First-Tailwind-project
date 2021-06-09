import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
