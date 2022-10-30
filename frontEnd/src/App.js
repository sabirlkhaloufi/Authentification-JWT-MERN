import  React  from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewPass from "./pages/NewPass";
import ForgetPass from "./pages/ForgetPass";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
    
    <Router>
      <div className="container">
      <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/ForgetPass" element={<ForgetPass/>}/>
          <Route path="/NewPass" element={<NewPass/>}/>
          <Route path="/Sidebar" element={<Sidebar/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
    </>

    
  );
}

export default App;
