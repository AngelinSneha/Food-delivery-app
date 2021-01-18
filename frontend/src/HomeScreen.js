import React from 'react'
import "./HomeScreen.css"
import Footer from "./components/footer/Footer"
import { makeStyles } from '@material-ui/core/styles';
import HomePageStart from "./components/homePage/HomePageStart";

const useStyles = makeStyles((theme) => ({
    icon: {
        paddingLeft:0
    },
}));
function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <HomePageStart />
            <Footer />
        </div>
    )
}

export default HomePage
