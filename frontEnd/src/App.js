import  React  from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NewPass from "./components/NewPass";
import ForgetPass from "./components/ForgetPass";
import Header from "./components/partials/Header";
import Profile from "./components/Dashboard/Profile";
import VerifyEmail from "./components/partials/VerifyEmail";
import PrivateRoutes from "./Utils/PrivateRoutes"
import VerifyEmailForPass from "./components/partials/VerifyEmailForPass"

function App() {

  

  return (
    <>
    
    <Router>
      <div>

      <Header/>

        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Profile" element={<Profile/>}/>
          </Route>


         
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/ForgetPass" element={<ForgetPass/>}/>
            <Route path="/NewPass/:token" element={<NewPass/>}/>
            <Route path="/VerifyEmail/:token" element={<VerifyEmail/>}/>
            <Route path="/VerifyEmailForPass/:token" element={<VerifyEmailForPass/>}/>
          

          

          <Route path="*" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
    </>

    
  );
}

export default App;
