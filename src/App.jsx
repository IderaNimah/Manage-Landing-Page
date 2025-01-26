// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css"
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PageTwo from "./Components/PageTwo/PageTwo";
import PageThree from "./Components/PageThree/PageThree";

const App = () => {
  return (
    <div className="container">
     <Header/>
     <Hero/>
     <PageTwo/>
     <PageThree/>
    </div>
  )
}

export default App