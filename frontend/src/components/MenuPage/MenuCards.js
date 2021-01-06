import React from 'react'
import { Grid } from '@material-ui/core'
import MenuCard from './MenuCard'
import MenuCardContent from "./MenuCardContent";
function MenuCards() {
    const getMenuCardContent = (obj) => {
        return (
        <Grid item xs={6} md={3} >
          <MenuCard {...obj} />
        </Grid>
        );
    }

    return (
        <div>
            <Grid container spacing={3}>
                {MenuCardContent.map(obj => getMenuCardContent(obj))}
            </Grid>
        </div>
    )
}

export default MenuCards
