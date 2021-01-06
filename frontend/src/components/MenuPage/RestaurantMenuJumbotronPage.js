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
          },
          color:"#c70039"
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
        fontWeight:'500',
    },
    resp: {
        margin: '.5rem 0 0 2rem',
        color:"#c70039"
    }
  }));


function RestaurantMenuJumbotronPage() {
    const classes = useStyles();
    return (
        <div>
             {/* Breadcrumbs */}
             <div className={classes.div}>
                        <Breadcrumbs aria-label="Menu" className={classes.bread}>
                            <Link color="inherit" href="/" >
                                Home
                            </Link>
                            <Link
                                aria-current="Menu"
                                className={classes.menu}
                            >
                                Food Menu
                            </Link>
                        </Breadcrumbs>
                        <div className={classes.content}>
                            <img className={classes.img} src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            <div className={classes.resContent}>
                                <h1 className={classes.resh1}>Craving For Tasty Food?</h1>
                                <p className={classes.resp}>Order your favourite dish now!</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default RestaurantMenuJumbotronPage
