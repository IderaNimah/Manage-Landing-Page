// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css"
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PageTwo from "./Components/PageTwo/PageTwo";

const App = () => {
  return (
    <div className="container">
     <Header/>
     <Hero/>
     <PageTwo/>
    </div>
  )
}

export default App