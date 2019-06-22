import React from 'react';
import Blogs from './components/Blogs/Blogs'
import './App.css';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ComingSoon from './components/ComingSoon/ComingSoon';
// import Header from './components/constants/Header';
// import Footer from './components/constants/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import NotFiled from './components/Claims/NotFiled';
import Filed from './components/Claims/Filed'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <Route exact path="/" component={ComingSoon} /> */}
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/home" component={HomePage} /> */}
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/claims-not-filed" component={NotFiled} />
        {/* <Route path="/claims-filed" component={Filed} /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
