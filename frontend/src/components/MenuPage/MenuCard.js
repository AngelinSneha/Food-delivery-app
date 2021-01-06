import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MenuQuatityButton from "./MenuQuatityButton";
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 170,
  },
});

function MenuCard(props) {
    const classes = useStyles();
    const {title, img,  cost} = props

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
                ₹{cost}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <MenuQuatityButton />
            </CardActions>
          </Card>
        </div>
    )
}

export default MenuCard
