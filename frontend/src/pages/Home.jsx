import { useRef, useState } from "react";
import demoMap from "../assets/Images/demoMap.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(false);

  const handleSubmit = () => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
          padding: 20,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 ml-8 absolute mt-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <div>
        <img src={demoMap} className="w-full h-screen object-cover" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 rounded-lg">
        <div className="h-[25%] relative bg-white p-5">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="opacity-0 absolute top-4 right-4 text-xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              value={pickUp}
              onClick={() => {
                setPanelOpen(true);
                setVehiclePanelOpen(false);
              }}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              className="bg-[#eee] px-8 py-2 text-md w-full text-center rounded-xl mt-2"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onClick={() => {
                setPanelOpen(true);
                setVehiclePanelOpen(false);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-8 py-2 text-md w-full text-center rounded-xl mt-2"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full rounded-md p-3"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full rounded-md p-3"
      >
        <ConfirmRide
          confirmRidePanel={confirmRidePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
    </div>
  );
};
export default Home;
