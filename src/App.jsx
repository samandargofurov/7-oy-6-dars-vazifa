import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login'
import Home from './pages/Home'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.value);
  const location = useLocation();

  useEffect(() => {
    if (!token && location.pathname != '/register' && location.pathname != '/forgotPassword') {
      navigate('/login')
    }
  }, [navigate, token])
  
  function PrivateRoute({children, isAuthentication, redirectTo = '/login'}) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;
  }

  return (
    <>
      <Routes>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/' element={<PrivateRoute isAuthentication={token ? true : false}><Home></Home></PrivateRoute>}></Route>

      </Routes>
    </>
  )
}

export default App
