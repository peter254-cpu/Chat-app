import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const { authUser } = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> : <Signup />} />
        <Route path="/home" element={authUser ? <Home /> : <Login /> } />
      </Routes>
      <Toaster />
    </div>
  );
}
