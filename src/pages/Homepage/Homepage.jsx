import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContent from "./HomeContent";
import BlogPost from "../BlogPost/BlogPost";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import NavbarHeader from "./NavbarHeader";

class Homepage extends React.Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <NavbarHeader/>
                    <Route path="/" exact component={HomeContent} />
                    <Route path="/BlogPost" component={BlogPost} />
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/ContactMe" component={ContactMe} />
                </Fragment>
            </Router>
        )
    }
}

export default Homepage;