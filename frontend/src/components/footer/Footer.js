import React from 'react'
import "./Footer.css"
var d = new Date();
  var n = d.getFullYear();
function Footer() {
    return (
        <div className="footer">
            <div className="footerLineOne">
                <a href="/contactus" className="ah">Contact Us</a>
                <a href="/" className="nameOfApp">🍜Food Delivery</a>
                <a href="/feedback"className="ah">Feedback</a>
            </div>
            <div className="footerLineTwo">© Copyright {n}. All Rights Reserved.</div>
        </div>
    )
}

export default Footer
