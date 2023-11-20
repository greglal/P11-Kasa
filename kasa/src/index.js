import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Styles/style.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header/header';
import Card from './Components/Card/card';
import Footer from './Components/Footer/footer';
import Error from './Components/Error/error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/card/:anounceId" element={<Card />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

