// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css"
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PageTwo from "./Components/PageTwo/PageTwo";
import PageThree from "./Components/PageThree/PageThree";
import PageFour from "./Components/PageFour/PageFour";
import PageFive from "./Components/PageFive/PageFive";

const App = () => {
  return (
    <>
    <div className="container">
     <Header/>
     <Hero/>
     <PageTwo/>
     <PageThree/>
    </div>
    <div className="sub-container">
       <PageFour/>
       <PageFive/>
    </div>
    </>
  )
}

export default App