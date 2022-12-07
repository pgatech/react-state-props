import React from "react";
import GridCardPost from "../pages/GridCardPost";
import NavbarHeader from "../pages/Navbar";
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <NavbarHeader />
                <GridCardPost />
            </BrowserRouter>
        )
    }
}

export default Home;