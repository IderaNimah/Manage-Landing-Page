import "./Header.css";
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/icon-hamburger.svg"
const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo"/>
      <ul>
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Career</li>
        <li>Community</li>
        <li><button className="btn">Get Started</button></li>
      </ul>

      <img src={hamburger} alt="hamburger" className="hamburger" />
    </nav>
  )
}

export default Header