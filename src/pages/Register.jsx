import { IoMoonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import userIcon from "../assets/userIcon.svg";
import googleIcon from "../assets/googleIcon.svg";
import sms from "../assets/emailIcon.svg";
import lock from "../assets/lockIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { createContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/usersSlice";

import "./Register.css";

export const ThemeContext = createContext(null);

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repasswordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function validate(name, email, password, repassword) {
    if (name.trim().length < 3) {
      alert("name is empty");
      return false;
    }

    if (email.trim().length < 3) {
      alert("email is empty");
      return false;
    }

    if (!Number(password)) {
      alert("password is empty");
      return false;
    }

    if (password < 0 || password > 3) {
      alert("name is empty");
      return false;
    }

    if (password != repassword) {
      alert("password or repassword is empty");
      return false;
    }

    return true;
  }

  function handleClick(e) {
    e.preventDefault();

    const isValid = validate("name, email, password");

    if (isValid) {
      const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        repasswordRef: repasswordRef.current.value,
      };

      dispatch(register(user));
      nameRef.current.value = null;
      emailRef.current.value = null;
      passwordRef.current.value = null;
      repasswordRef.current.value = null;

      navigate("/login");
    }
  }

  return (
    <>
      <div className="container mx-auto w-96">
        <div className="flex flex-col gap-5 mt-5 mb-5 bg-white py-4 px-6 rounded-lg">
          <div className="flex justify-between items-center">
            <span></span>
            <h1 className="text-center font-bold text-4xl">Let's go!</h1>
            <IoMoonOutline className="cursor-pointer text-2xl" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <div className="flex gap-2 border rounded-lg py-2 px-3 mt-2">
              <img src={userIcon} alt="" />
              <input
                ref={nameRef}
                className="w-96 outline-none bg-transparent"
                type="text"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <div className="flex gap-2 border rounded-lg py-3 px-3 mt-2">
              <img src={sms} alt="" />
              <input
                ref={emailRef}
                className="w-96 outline-none bg-transparent"
                type="email"
                placeholder="example@site.com"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Choose Password</label>
            <div className="flex gap-2 border rounded-lg py-3 px-3 mt-2">
              <img src={lock} alt="" />
              <input
                ref={passwordRef}
                className="w-96 outline-none bg-transparent"
                type="password"
                placeholder="Minimum 8 characters"
              />
              <FaRegEye className="text-2xl cursor-pointer opacity-50" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Confirm Password</label>
            <div className="flex gap-2 items-center border rounded-lg py-3 px-3 mt-2">
              <img src={lock} alt="" />
              <input
                ref={repasswordRef}
                className="w-96 outline-none bg-transparent"
                type="password"
                placeholder="Confirm Password"
              />
              <FaRegEye className="text-2xl cursor-pointer opacity-50" />
            </div>
          </div>

          <button
            onClick={handleClick}
            className="signup text-white rounded-lg p-4 mt-5 mb-3 font-bold"
          >
            Sign Up
          </button>

          <div className="flex flex-col items-center gap-4">
            <button className="google flex justify-center rounded-lg border py-3 w-full items-center gap-3">
              <img src={googleIcon} alt="" />
              <span className="tetx-white">Sign Up with Google</span>
            </button>

            <NavLink to="/login">or login with SSO</NavLink>
          </div>

          <div className="border-t-2 border-gray-300">
            <p
              className="text-center mt-2 text-gray-500"
              style={{ fontSize: "9px" }}
            >
              By lobby the button above, you agree to our{" "}
              <NavLink className="underline">Terms of Service</NavLink> and{" "}
              <NavLink className="underline">Privacy Policy</NavLink>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
