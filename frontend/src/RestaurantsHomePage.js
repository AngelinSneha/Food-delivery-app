import React from 'react'
import Appbar from "./Appbar";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./RestaurantsHomePage.css";
import { Grid } from "@material-ui/core";
import RestaurantPages from "./RestaurantPages";
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
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                    <RestaurantPages />
                </Grid>
                <Grid item xs={1} />
            </Grid>

            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default RestaurantsHomePage
