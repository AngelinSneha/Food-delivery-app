import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    '&:hover': {
      marginTop: '-5px',
  }
  },
  media: {
    height: 230,
  },
  boxDetails: {
      marginBottom: 0,
      marginLeft:0,
      paddingLeft:0
  }
});

function RestaurantPage(props) {
    
    const classes = useStyles();
    // const [value, setValue] = React.useState(3.2);
    const {title, img, ratingValue, content, cost, time} = props

    return (
        <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {content}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent" className={classes.boxDetails}>
              <Rating name="read-only" value={ratingValue} readOnly />
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
          ₹{cost} for two | {time} mins
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}

export default RestaurantPage
