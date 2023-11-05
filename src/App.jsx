import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LLayout from "./LandingPage/LandingLayout/LLayout";
import Dashboard from "./MainPage/MainComponent/Dashboard";
import MainPage from "./MainPage/MainComponent/Mainpage";
import MLayOut from "./MainPage/MainLayout/MLayOut";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LLayout />} />
          <Route path="/m-layout" element={<MLayOut />} />
          <Route path="/page" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
