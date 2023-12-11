import React from "react";
import '../../App.css';
import Navbar from '../OfficerNavbar';
import '../styles/OfficeHome.css'


function OfficeHome() {
    return(
    <>
        <Navbar/>
        <div className="hi">
        <video src='/videos/website_intro.mp4' autoPlay loop muted />
        </div>
    </>
    )
}

export default OfficeHome;