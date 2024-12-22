import "./Header.css";
import logo from "../../assets/logo.svg"
const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Career</li>
        <li>Community</li>
        <li>Get Started</li>
      </ul>
    </nav>
  )
}

export default Header