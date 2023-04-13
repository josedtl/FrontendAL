import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Ejemplo from './components/Ejemplo';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/ejemplo" element={<Ejemplo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
