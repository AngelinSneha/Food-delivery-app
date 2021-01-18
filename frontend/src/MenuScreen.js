import React from 'react'
import Appbar from './components/header/Appbar'
import RestaurantMenuJumbotronPage from "./components/MenuPage/RestaurantMenuJumbotronPage";
import MenuCards from './components/MenuPage/MenuCards';
import { Grid } from '@material-ui/core'
import Footer from "./components/footer/Footer";
function RestaurantMenuPage() {
    return (
        <div>
            {/* header */}
            <Appbar />
            {/* jumbotron */}
            <RestaurantMenuJumbotronPage />
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
