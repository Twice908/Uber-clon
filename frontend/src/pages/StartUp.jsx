import { Link } from "react-router-dom";
import React from "react"

const StartUp = () => {
  return (
    <div>
      <div className=" bg-[url(https://images.unsplash.com/photo-1647424825116-fbf8b9415fc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover h-screen pt-6 w-full flex justify-between flex-col bg-red-400">
        <img
          className="w-16 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
        <div className="bg-white rounded-lg flex flex-col justify-center items-start px-5 py-8 gap-6">
          <h2 className="text-2xl font-semibold">Get Started with Uber</h2>
          <Link to='/login' className="w-full flex justify-center items-center text-white rounded-md py-3 bg-black">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StartUp
