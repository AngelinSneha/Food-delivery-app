import { Grid } from '@material-ui/core'
import React from 'react'
import RestaurantContentPage from "./RestaurantContentPage";
import RestaurantPage from "./RestaurantPage";
function RestaurantPages() {

    const getRestaurantContentPage = (obj) => {
        return (
            <Grid item xs={6} md={4} >
                <RestaurantPage {...obj} />
            </Grid>
        )
    }

    return (
        <div>
        <Grid container spacing={3}>
            {RestaurantContentPage.map(obj => getRestaurantContentPage(obj))}
        </Grid>
        </div>
    )
}

export default RestaurantPages
