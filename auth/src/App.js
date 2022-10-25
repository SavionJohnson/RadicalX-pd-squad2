import "./App.css";
import Login from "./components/authentication/Login/Login";
import SignUp from "./components/authentication/SignUp/SignUp";
import ForgotPassword from "./components/authentication/Login/ForgotPassword";
import Dashboard from "./components/authentication/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

function App() {
  return (
    <>
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
              <div className='Dashboard' >
                <Dashboard />
              </div>
                <Timeline />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
