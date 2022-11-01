import  React  from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NewPass from "./components/NewPass";
import ForgetPass from "./components/ForgetPass";
import Header from "./components/partials/Header";
import Sidebar from "./components/partials/Sidebar"
import VerifyEmail from "./components/partials/VerifyEmail";

function App() {

  

  return (
    <>
    
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/ForgetPass" element={<ForgetPass/>}/>
          <Route path="/NewPass" element={<NewPass/>}/>
          <Route path="/Sidebar" element={<Sidebar/>}/>
          <Route path="/VerifyEmail/:token" element={<VerifyEmail/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
    </>

    
  );
}

export default App;
