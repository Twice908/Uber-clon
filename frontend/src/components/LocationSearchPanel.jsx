const LocationSearchPanel = (props) => {
  // console.log(props);
  

  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School",
    "24B, Near Kapoor's cafe, Coding School, Bhopal",
    "24B, Near cafe, Sheriyans Coding School, Bhopal",
    "24B, Near Kapoor's cafe, Sheriyans Coding, Bhopal",
  ];

  return (
    <div className="flex flex-col gap-2">
      {locations.map(function (elem, index) {
        return (
          <div onClick={()=>{
            // console.log("Panel opened");
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }} key={index} className="flex border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start gap-4">
            <h2 className="bg-[#eee] px-2 py-1 rounded-full">
              <i className="ri-map-pin-2-line"></i>
            </h2>
            <h4 className="font-medium text-sm">
            {elem}
            </h4>
          </div>
        );
      })}
    </div>
  );
};
export default LocationSearchPanel;
