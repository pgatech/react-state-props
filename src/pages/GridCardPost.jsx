import axios from 'axios';
import React,{Component} from 'react';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AddPost from './AddPost';
import Post from './Post';

class GridCardPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            console.log(result.data);
            this.setState ({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render (){
            return (
            <Fragment>
                <Container>
                    <AddPost />
                    {
                        this.state.post.map(post => {
                            return(
                                <Post key={post.id} data={post} remove={this.handleRemove}/>
                            )
                        })
                    }
                </Container>   
             </Fragment>
        )
    }
}

export default GridCardPost;