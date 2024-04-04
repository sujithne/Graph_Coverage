import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
// Import or define other pages (GeneratePage, ExamplePage)

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add routes for your Generate and Example components */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;