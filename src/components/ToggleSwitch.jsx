import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
  
const ToggleSwitch = () => {
  return (
  <>      
      <label className="flex items-center cursor-pointer relative mb-4" htmlFor="toggle-switch">
      <input type="checkbox" id="toggle-switch" className="sr-only"/>
      <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
      <span className="ml-3 text-gray-900 text-sm font-medium"><HiMoon/> <HiSun/></span>
    </label>
  </>
  );
};
  
export default ToggleSwitch;