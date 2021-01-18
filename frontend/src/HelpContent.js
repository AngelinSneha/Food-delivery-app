import React from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    width:"50%"
  },
  m:{
      textAlign:"center",
      marginTop:"3rem"
  },
  hh11: {
    textAlign:'center',
    fontFamily:"Arial",
    fontSize:"2.5rem"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    }
  }
});

function HelpContent() {
    const classes = useStyles();

    return (
      <div>
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item sm={false} sm={4} md={7} >
            <img src="https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg" />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.m}>
                <h1>We would love to hear from you!</h1>
                <h4>Contact us any time.</h4>
                <h3>📞: 9284111743</h3>
                <h3>📧: foodelivery12@yahoo.in</h3>
                </div>
            </Grid>
        </Grid>
        <h1 className={classes.hh11}>Keep in touch!</h1>
        </div>
    );
}

export default HelpContent
