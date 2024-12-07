const ConfirmRide = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-2xl font-semibold mb-4">Confirm your ride</h3>
        <h5
          onClick={() => {
            props.setConfirmRidePanel(false);
          }}
          className="opacity-1 text-xl"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>
      <div className="flex flex-col items-center gap-5 justify-between">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          className="object-contain w-36"
        />
        <div className="w-full py-[1px] bg-gray-300"></div>
        <div className="flex flex-col w-full items-start justify-between">
          <div className="flex justify-center items-center gap-6">
            <i className="ri-map-pin-fill"></i>
            <div>
              <h4 className="text-lg font-semibold">562/11-A</h4>
              <h4 className="text-sm font-normal text-gray-500">
                Kaikondrahalli, Bengaluru, Karnataka
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-between">
          <div className="flex justify-center items-center gap-6">
            <i className="ri-map-pin-fill"></i>
            <div>
              <h4 className="text-lg font-semibold">Third Wave Coffee</h4>
              <h4 className="text-sm font-normal text-gray-500">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-between">
          <div className="flex justify-center items-center gap-6">
            <i className="ri-map-pin-fill"></i>
            <div>
              <h4 className="text-xl font-semibold">$ 18.25</h4>
              <h4 className="text-sm font-normal text-gray-500">Mode : Cash</h4>
            </div>
          </div>
        </div>
        <button className="w-full px-2 py-2 text-lg bg-black rounded-lg text-white">
          Confirm
        </button>
      </div>
    </div>
  );
};
export default ConfirmRide;
