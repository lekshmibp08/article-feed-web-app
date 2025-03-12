import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupForm from "./pages/SignupForm";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignupForm />} />
  </Routes>
  </>;
}

export default App;
