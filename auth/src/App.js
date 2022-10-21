import './App.css';
import Login from './components/authentication/Login/Login';
import SignUp from './components/authentication/SignUp/SignUp';
import Dashboard from './components/authentication/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import Timeline from './components/timeline/Timeline';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
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
