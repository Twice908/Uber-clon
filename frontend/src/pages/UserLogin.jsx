import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });

    // console.log(userData);

    setEmail("");
    setPassword("");
  };

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
          <h3 className="text-xl font-medium">What's your email?</h3>
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="w-full font-semibold flex justify-center items-center text-white rounded-md py-3 bg-[#10b461]"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};
export default UserLogin;