import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Dashboard} from './components/dashboard/Dashboard';
import {About} from './components/about/About';
import {Contact} from './components/contact/Contact';
import {pagenotfound} from './components/pagenotfound/Pagenotfound'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
