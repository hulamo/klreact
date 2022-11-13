import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Anuncios from "./pages/Anuncios"

import logo from './logo.svg';
import './App.css';

import Login from "./pages/Login";
import Anuncio from "./pages/Anuncio";
import Signin from "./pages/Signin";
import Nuevoanucio from "./pages/Nuevoanucio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Anuncios/>}/>
        <Route path="/anucnios" element={<Anuncios/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/anuncio:id" element={<Anuncio/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/nuevoanuncio" element={<Nuevoanucio/>}/>


      </Routes>
    </Router>
  );
}

export default App;
