
import React from "react";
  
const ToggleSwitch = ({ label, handleDark, dark }) => {
  return (
  <label for="toggle-example">
  <input type="checkbox" id="toggle-example" />
  <div></div>
  <span>Toggle me</span>
</label>
  );
};
  
export default ToggleSwitch;