import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupForm from "./pages/SignupForm";
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage";
import CreateArticlePage from "./pages/CreateArticlePage";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignupForm />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
    <Route path="/dashboard/create-article" element={<CreateArticlePage />} />

  </Routes>
  </>;
}

export default App;
