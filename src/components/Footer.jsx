import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInfoContainer">
        <div className="footerSubInfoContainer">
          <h1>Category</h1>
          <div>
            <p>WOMEN</p>
            <p>MEN</p>
            <p>ELECTRONICS</p>
          </div>
        </div>
        <div className="footerSubInfoContainer">
          <h1>Legal</h1>
          <div>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cooking Policy</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
      <h4>Copyright © 2022 Trippybug . All rights reserved.</h4>
    </div>
  );
};

export default Footer;
