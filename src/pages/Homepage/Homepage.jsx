import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContent from "./HomeContent";
import BlogPost from "../BlogPost/BlogPost";
import Projects from "../Projects/Projects";
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
                    <Route path="/blog" component={BlogPost} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/contact" component={ContactMe} />
                </Fragment>
            </Router>
        )
    }
}

export default Homepage;