import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    '&:hover': {
        marginTop: '-5px',
    }
  },
  media: {
    height: 0,
    paddingTop: '76.25%', // 16:9
  },
  typo: {
      paddingBottom: '0',
  }, 
  spacing: {
        paddingLeft:'12px'
  },
  cardaction: {
      paddingTop:0
  },
  icon: {
      paddingLeft:0
  },

    weight: {
        fontWeight:'bold'
    }
}));


function CollectionCard(props) {
    const classes = useStyles();
    const {image, content, places} = props
  return (
    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        image={image}
        title={content}
      />
      <CardContent className={classes.typo}>
          <Typography variant="h6" component="h6" className={classes.weight}>
            {content}
          </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardaction}>
          <Button size="small" color="secondary" className={classes.spacing}>
            {places}
          </Button>
        <IconButton className={classes.icon}  color="secondary" aria-label="Arrow Right">
          <ArrowRightIcon />
        </IconButton>
        </CardActions>
    </Card>
  );
}

export default CollectionCard
