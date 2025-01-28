import "./PageFour.css";
import simpattern from "../../assets/bg-simplify-section-mobile.svg";


const PageFour = () => {
  return (
    <div className="page-four">
      <h1>Simplify how your team works today.</h1>
      <button className="pagefourbtn">Get Started</button>
      <img
                src={simpattern}
                alt="tabletpattern"
                className="pagefourillustration"
              />
    </div>
  );
};

export default PageFour;
