import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Page/Home';
import Navbar from './Component/Header/Navbar';
import About from './Component/content/About';
import ContectUs from './Component/Page/ContectUs';
import Admin from './Component/Page/Admin';
import AdminRegister from './Component/Page/AdminRegister';
import Dashboard from './Component/dash/Dashboard'
import Details from './Component/details/Details';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path='/admin' element={<Admin />} />
        <Route path='/contact' element={<ContectUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/adminregister' element={<AdminRegister />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/contact/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
