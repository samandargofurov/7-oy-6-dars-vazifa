import { IoMoonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import googleIcon from '../assets/googleIcon.svg'
import lock from '../assets/lockIcon.svg'
import sms from '../assets/emailIcon.svg'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../redux/tokenSlice';
import { useRef, useState } from "react";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const users = useSelector(state => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ type, setType ] = useState('password');
  const [ icon, setIcon ] = useState('FaRegEyeSlash')

  function Click(e) {
    e.preventDefault();

    let user = users.find(el => {
      return el.email == emailRef.current.value && el.password == passwordRef.current.value
    });

    if(user) {
      dispatch(add(user.email));
      navigate('/')
    } else {
      alert("parol yoki email noto'gri")
    }

    emailRef.current.value = null,
    passwordRef.current.value = null

  }

  function handleToggle() {
    if(type === 'password' || !icon) {
      setIcon(FaRegEye);
      setType('text')
    } else {
      setIcon(FaRegEyeSlash);
      setType('password');
    }
  }

  return (
    <>
      <div className="container mx-auto w-96">
          <div className="flex flex-col gap-5 mt-10 bg-white py-4 px-6 rounded-lg">
            <div className='flex justify-between items-center'>
              <span></span>
              <h1 className="text-center font-bold text-3xl">Welcome back!</h1>
              <IoMoonOutline className="cursor-pointer text-2xl" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <div className="flex gap-2 border rounded-lg py-3 px-3 mt-2">
                <img src={sms} alt="" />
                <input ref={emailRef} className="w-96 outline-none bg-transparent" type="email" placeholder="example@site.com" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Choose Password</label>
              <div className="flex gap-2 items-center border rounded-lg py-3 px-3 mt-2">
                <img src={lock} alt="" />
                <input ref={passwordRef} className="w-96 outline-none bg-transparent" type={type} placeholder="Minimum 3 characters" />
              <span onClick={handleToggle}>
                {
                  icon ? <FaRegEye className="text-lg cursor-pointer opacity-40" /> : <FaRegEyeSlash className="text-lg cursor-pointer opacity-40" />
                }
              </span>
              </div>
            </div>

            <div className="flex justify-between">
                <span></span>
                <NavLink to='/forgotPassword'>Forgot Password?</NavLink>
            </div>

            <button onClick={Click} className='signup text-white rounded-lg p-4 mb-3 font-bold'>Sign In</button>

            <div className="flex flex-col items-center gap-4 mb-5">
              <button className="google flex justify-center rounded-lg border py-3 w-full items-center gap-3">
                <img src={googleIcon} alt="" />
                <span className="tetx-white">Sign Up with Google</span>
              </button>

              <NavLink to='/register'>or register with SSO</NavLink>
            </div>
          </div>
      </div>
    </>
  )
}

export default Login