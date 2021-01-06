import React from 'react'
import Appbar from './header/Appbar'
import RestaurantMenuJumbotronPage from "./MenuPage/RestaurantMenuJumbotronPage";
import MenuCards from './MenuPage/MenuCards';
import { Grid } from '@material-ui/core'
import Footer from "./footer/Footer";
function RestaurantMenuPage() {
    return (
        <div>
            {/* header */}
            <Appbar />
            {/* jumbotron */}
            <RestaurantMenuJumbotronPage
            img= "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
            title="Empire Restaurant"
            content="North Indian, Chinese, South Indian, Biryani"
            />
            {/* menu */}
            <h1 style={{margin:'2rem 0 2rem 3rem'}}>Recommended For You</h1>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                    <MenuCards />
                </Grid>
                <Grid item xs={1} />
            </Grid>
            {/* Footer */}
            <Footer
             />
        </div>
    )
}

export default RestaurantMenuPage
