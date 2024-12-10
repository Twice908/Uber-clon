import React, { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {UserDataContext} from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  
  const navigate = useNavigate()

  const { user, setUser } = useContext(UserDataContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

     if (response.status === 201) {
       const data = response.data
      localStorage.setItem("token", data.token)
       setUser(data.user)
       navigate("/home")
     }

    // console.log(userData);

    setEmail("")
    setFirstName("")
    setLastName("")
    setPassword("")
  }

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-xl font-medium">What's your name?</h3>
          <div className="flex gap-4">
            <input
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Firstname"
            />
            <input
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="text-md width-1/2 placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-xl width-1/2 font-medium">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium">Enter password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
            type="password"
            placeholder="Password"
          />
          <button className="w-full flex font-semibold justify-center items-center text-white rounded-md py-3 bg-black">
            Create account
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div className="flex items-center w-full justify-center">
        <p className="text-[10px] leading-tight font-light text-center">
          By proceeding, you consent to get calles, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};
export default UserSignup
