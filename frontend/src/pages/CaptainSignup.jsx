import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [CaptainData, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
      fullName: {
        Firstname: Firstname,
        Lastname: Lastname,
      },
      vehicle:{
        vehicleColor: vehicleColor,
        Capacity: Capacity,
        plate: numberPlate,
        type: vehicleType,
      }
    });

    // console.log(CaptainData);
    setEmail("")
    setPassword("")
    setFirstName("")
    setLastName("")
    setCapacity("")
    setNumberPlate("")
    setVehicleType("")
    setVehicleColor("")
  };

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div>
        <img className="w-14 mb-3" src="https://logodix.com/logo/4702.png" />
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-xl font-medium">What our Captain's name?</h3>
          <div className="flex gap-4">
            <input
              value={Firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Firstname"
            />
            <input
              value={Lastname}
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
          <h3 className="text-xl font-medium">Enter vehicle details</h3>
          <div className="flex gap-4">
            <input
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Vehicle color"
            />
            <input
              value={numberPlate}
              onChange={(e) => {
                setNumberPlate(e.target.value);
              }}
              className="text-md width-1/2 placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Number plate"
            />
          </div>
          <div className="flex gap-4">
            <input
              value={Capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              className="text-md placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="text"
              placeholder="Capacity"
            />
            <select
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              className="text-md width-1/2 placeholder:text-md font-normal bg-[#eeeeee] rounded px-4 py-2 border w-full"
              required
              type="select"
              placeholder="Vehicle type"
            >
              <option value="option1">Car</option>
              <option value="option2">Auto</option>
              <option value="option3">Sedan</option>
            </select>
          </div>
          <button className="w-full flex font-semibold justify-center items-center text-white rounded-md py-3 bg-black">
            Sign up as captain
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
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
export default CaptainSignup;
