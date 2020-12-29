import React from 'react'
import Appbar from "./Appbar";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./RestaurantsHomePage.css";
import Footer from "./Footer"
function RestaurantsHomePage() {
    return (
        <div>
            {/* AppBar */}
            <Appbar />
            {/* content and restaurants */}
            <div className="content">
            <span className="address">Home  -&gt;  Bangalore  -&gt; <span className="addressSpan">Food Delivery</span></span>
            <h1 className="OrderfromRes">Order From Restaurants Around You</h1>
            <hr></hr>
            </div>
            

            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default RestaurantsHomePage
