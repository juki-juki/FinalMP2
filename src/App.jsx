import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LLayout from "./LandingPage/LandingLayout/LLayout";
import MLayOut from "./MainPage/MainLayout/MLayOut";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LLayout/>} />
          <Route path="/m-layout" element={<MLayOut/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;