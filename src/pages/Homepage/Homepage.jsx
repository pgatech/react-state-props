import React, { Fragment } from "react";
import {BroserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import HomeContent from "./HomeContent";
import BlogPost from "../BlogPost/BlogPost";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import NavbarHeader from "./NavbarHeader";

class Homepage extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <NavbarHeader/>
                    <Route path="/" exact component={HomeContent} />
                    <Route path="/BlogPost" component={BlogPost} />
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/ContactMe" component={ContactMe} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Homepage;