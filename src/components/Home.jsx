import React,{Fragment} from "react";
import GridCardPost from "../pages/GridCardPost";
import NavbarHeader from "../pages/Navbar";

class Home extends React.Component {
    render(){
        return(
            <Fragment>
                <NavbarHeader />
                <GridCardPost />
            </Fragment>
        )
    }
}

export default Home;