import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupForm from "./pages/SignupForm";
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignupForm />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
  </Routes>
  </>;
}

export default App;
