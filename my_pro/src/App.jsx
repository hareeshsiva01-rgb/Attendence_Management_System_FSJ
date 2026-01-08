import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
