import React from "react";
// import playStore from "../../../images/playStore.png";
// import appStore from "../../../images/appStore.png";
import googleapplogo from "../../../images/googleapplogo.png";
import "./Footer.css"


const Footer = () =>{
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={googleapplogo} alt="googleapplogo" />
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2023 &copy; Aman Shrivastava</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="#instagram">Instagram</a>
                <a href="#youtube">Youtube</a>
                <a href="#facebook">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;