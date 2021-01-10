import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./HomePageStart.css"
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor:  '#c70039',
      float: 'right',
      marginTop:'4rem',
      height: '3.5rem',
      '&:hover': {
        background: "#000",
      }
    },
  }));
function HomePageStart() {
      const classes = useStyles();
    return (
        <div className="row">

            {/* main */}
            <div className="main">
                <p class="app_name">🍜Food Delivery </p> 
                <div className="login_signup_buttons">
                    <a href="/login" className="login_button">Login</a>
                    <a href="/login" className="signup_button">SignUp</a>
                </div>
                <div className="main_content">
                    <h1 className="main_contentLineOne" >Hungry?</h1>
                    <p className="main_contentLineTwo">Don't worry, You're in the right place.</p>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        href="/login"
                        className={classes.button}
                        endIcon={<SendIcon />}
                    >
                        Order Now
                    </Button> 
                </div>  
            </div> 

            {/* image */}
            <div className="side">
                <img src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" class="homePage_img" />
            </div>
        </div>
        
    )
}

export default HomePageStart
