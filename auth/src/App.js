import './App.css';
import Login from './components/authentication/Login/Login';
import SignUp from './components/authentication/SignUp/SignUp';
import './index.css'
// import Dashboard from './components/authentication/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import TeamAdmin from './components/authentication/TeamAdmin/TeamAdmin';


function App() {
  return (
    <div className='w-full h-full'>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <TeamAdmin/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    
    </div>
  );
}

export default App;
