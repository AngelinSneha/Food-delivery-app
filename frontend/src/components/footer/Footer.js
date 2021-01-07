import React from 'react'
import "./Footer.css"
var d = new Date();
  var n = d.getFullYear();
function Footer() {
    return (
        <div className="footer">
            <div className="footerLineTwo">© Copyright {n}. All Rights Reserved.</div>
        </div>
    )
}

export default Footer
