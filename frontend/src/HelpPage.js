import React from 'react'
import Footer from './components/footer/Footer'
import AppBar from "./components/header/Appbar"
import "./HelpPage.css"
import HelpContent from "./HelpContent"
function HelpPage() {
    return (
        <div>
            {/* header */}
            <AppBar />
            <HelpContent />
            {/* footer */}
            <Footer />
        </div>
    )
}

export default HelpPage
