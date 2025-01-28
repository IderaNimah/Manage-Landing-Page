import "./PageFive.css";
import MyIconF from '../../assets/icon-facebook.svg';
import MyIconY from '../../assets/icon-youtube.svg';
import MyIconX from '../../assets/icon-twitter.svg';
import MyIconP from '../../assets/icon-pinterest.svg';
import MyIconI from '../../assets/icon-instagram.svg';
import Logo from '../../assets/logo.svg';


function PageFive() {
  return (
    <div className="pagefive">
      <div className="foot-input">
        <input type="text" />
        <button>GO</button>
      </div>
      <div className="font-nav">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/career">Careers</a>
          </li>
          <li>
            <a href="/commmunity">Community</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="footer-icon">
         <img src={MyIconF} alt="Facebook" />
         <img src={MyIconY} alt="YouTube" />
         <img src={MyIconX} alt="YouTube" />
         <img src={MyIconP} alt="Pinterest" />
         <img src={MyIconI} alt="Instagram" />
      </div>
      <div className="footer-logo">
      <img src={Logo} alt="Logo" />
      <p>Copyright 2020.All Rights Reserved</p>
      </div>
    </div>
  );
}

export default PageFive;
