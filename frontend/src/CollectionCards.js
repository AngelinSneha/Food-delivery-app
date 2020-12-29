import React from 'react'
import { Grid } from "@material-ui/core";
import CollectionCard from "./CollectionCard";
import CollectionCardContent from "./CollectionCardContent";
function CollectionCards() {

    const getCollectionCardContent = (obj) => {
        return (
        <Grid item xs={6} md={3} >
          <CollectionCard {...obj} />
        </Grid>
        );
    }

    return (
        <div>
            <Grid container spacing={3}>
                {CollectionCardContent.map(obj => getCollectionCardContent(obj))}
            </Grid>
        </div>
    )
}

export default CollectionCards
