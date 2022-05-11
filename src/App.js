import React from 'react'
import NavBar from './components/NavBar'
import './styles/app.css'

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <article>
          <h1 className="text-3xl font-bold underline">Adopt a Milo </h1>
          Adopting a pet is Cool Beans!!
        </article>
      </div>
    </div>
  )
}

export default App