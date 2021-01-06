import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
    bread: {
      margin: '1.5rem 2rem',
    },
    menu: {
        '&:hover': {
            textDecoration:"none" ,
          }
    },
    div: {
        padding: '1rem',
        backgroundColor:"#f4f4f4"
    },
    img: {
        width:'25%',
        marginLeft:'2rem',
        // float:'left'
    },
    content: {
        display:'flex',
        flex:'1'
    },
    resContent: {
        margin:0,
    },
    resh1: {
        margin:"0 0 0 2rem",
        fontWeight:'500'
    },
    resp: {
        margin: '.5rem 0 0 2rem',
        color: 'gray',
    }
  }));


function RestaurantMenuJumbotronPage(props) {
    const classes = useStyles();
    const {img, title, content} = props;
    return (
        <div>
             {/* Breadcrumbs */}
             <div className={classes.div}>
                        <Breadcrumbs aria-label="Menu" className={classes.bread}>
                            <Link color="inherit" href="/" >
                                Home
                            </Link>
                            <Link color="inherit" href="/restaurants" >
                                Restaurants
                            </Link>
                            <Link
                                color="secondary"
                                aria-current="Menu"
                                className={classes.menu}
                            >
                                Food Menu
                            </Link>
                        </Breadcrumbs>
                        <div className={classes.content}>
                            <img className={classes.img} src={img} />
                            <div className={classes.resContent}>
                                <h1 className={classes.resh1}>{title}</h1>
                                <p className={classes.resp}>{content}</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default RestaurantMenuJumbotronPage
