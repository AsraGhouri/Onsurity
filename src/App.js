import React from 'react';
import Blogs from './components/Blogs/Blogs'
import './App.css';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import Filed from './components/Claims/Filed'
import AddPlan from './components/AddPlan/AddPlan';
// import NotFiled from './components/Claims/NotFiled';
// import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/claims-filed" component={Filed} />
        <Route path="/add-plan" component={AddPlan} />
        {/* <Route exact path="/" component={ComingSoon} /> */}
        {/* <Route path="/claims-not-filed" component={NotFiled} /> */}
        {/* <Route path="/home" component={HomePage} /> */}
      </div>
    </Router>
  );
}

export default App;
