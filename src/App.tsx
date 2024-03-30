import React from "react"
import NavBar from "./components/navbar/NavBar"
import "./index.scss"
import "./layout.scss"


const App  : React.FC =  () => {

  return (
    <>
    <div className="layout">
      <NavBar/>
    </div>
    </>
  )
}

export default App
