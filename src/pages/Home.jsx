import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import remove from '../redux/tokenSlice'

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(remove());
    navigate('/login');
  }
  
  return (
    <>
        <div className="container mx-auto w-1/2">
            <div className="mt-48">
                    <div className="flex flex-col items-center py-4 gap-10 bg-white rounded-lg">
                        <NavLink to='/register' className='signup py-2 px-4 rounded-lg'>Register</NavLink>
                        <NavLink to='/login' className='signup py-2 px-4 rounded-lg'>Login</NavLink>
                        <button onClick={handleLogout} className="bg-black text-white py-2 px-4 rounded-lg">Logout</button>
                    </div>
            </div>

        </div>
    </>
  )
}

export default Home