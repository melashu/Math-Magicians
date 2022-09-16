import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Qoute from '../pages/Qoute';
import Calculator from './Calculator';
import style from '../css/NavBar.module.css';
import Footer from '../pages/Footer';

const Navbar = () => (
  <>
    <nav className={style.nav}>
      <h2>Maths Magicians</h2>
      <ul className={style.navlist}>
        <Link to="/">Home</Link>
        <Link to="/calclator">Calculator</Link>
        <Link to="/qoute">Qoute</Link>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calclator" element={<Calculator />} />
      <Route path="/qoute" element={<Qoute />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    <Footer />
  </>
);

export default Navbar;
