// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './Componet/Navbar1';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forget from './Pages/Forget';
import Home from './Pages/Home';
import Investments from './Pages/Investments';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Spend from './Pages/Spend';
import Save from './Pages/Save'
import Audlt from './Pages/Audit'
import Futter from './Componet/Futter';
import Faq from './Pages/Faq';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/investment' element={<Investments />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/spend' element={<Spend />} />
          <Route path='/save' element={<Save />} />
          <Route path='/audlt' element={<Audlt />} />
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
        <Futter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
