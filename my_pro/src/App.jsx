import { Routes, Route } from "react-router-dom";

import "./App.css";
import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/Forgotpassword";
import Attendance from "./pages/Attendance";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/attendance" element={<Attendance/>}/>
      

    </Routes>
    
  );
}

export default App;
