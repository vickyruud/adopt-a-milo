import React, { useState } from 'react';
import NavBar from './components/NavBar';
import './styles/app.css';

export const SiteContext = React.createContext();

function App() {

  const [dark, setDark] = useState(false)




  const siteContextValue = {
    dark,
    setDark
  }

  return (
    <SiteContext.Provider value={siteContextValue}>
      <div>
        <NavBar/>
        <div className="container">
          <article>
            <h1 className="text-3xl font-bold underline">Adopt a Milo </h1>
            Adopting a pet is Cool Beans!!
          </article>
        </div>
      </div>
    </SiteContext.Provider>
  )
}

export default App