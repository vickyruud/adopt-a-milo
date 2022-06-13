import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import "./styles/app.css";

export const SiteContext = React.createContext();

function App() {
  //handles value for dark theme
  const [dark, setDark] = useState(false);

  //holds context values
  const siteContextValue = {
    dark,
    setDark,
  };

  


  return (
    <SiteContext.Provider value={siteContextValue}>
      <div className={dark ? "bg-black" : null}>
        <NavBar /> 
        <div  className={
              (dark ? "text-white " : null) + "w-screen flex justify-center"
            }>
        <Carousel />
       </div> 
        <article className={dark ? "text-white " : null}>
          <h1
            className={
              (dark ? "text-white " : null) + " text-3xl font-bold underline"
            }
          >
            Adopt a Milo
          </h1>
          Adopting a pet is Cool Beans!!
        </article>
      </div>
    </SiteContext.Provider>
  );
}

export default App;
