import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupForm from "./pages/SignupForm";
import LoginPage from "./pages/LoginPage";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignupForm />} />
    <Route path='/login' element={<LoginPage />} />
  </Routes>
  </>;
}

export default App;
