import "./Hero.css";
import desktopimage from "../../assets/illustration-intro.svg";
import pattern from "../../assets/bg-tablet-pattern.svg";

const Hero = () => {
  return (
    <div className="hero-section ">
      <div className="hero-left">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <button className="btn">Get Started</button>
        <img
          src={pattern}
          alt="tabletpattern"
          className="second-illustration"
        />
      </div>

      <div className="hero-right">
        <img src={desktopimage} alt="desktopimage" className="barimage" />
        <img src={pattern} alt="tabletpattern" className="illustration" />
      </div>
    </div>
  );
};

export default Hero;
