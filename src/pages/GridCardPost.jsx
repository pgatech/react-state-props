import axios from 'axios';
import React,{Component} from 'react';
import { Fragment } from 'react';
import { Button, Container, Form, Card, Row} from 'react-bootstrap'
import AddPost from './AddPost';
import Post from './Post';

class GridCardPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1, 
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`)
        .then((result) => {
            console.log(result.data);
            this.setState ({
                post: result.data
            })
        })
    }

    // Post Data to JSON
    postDataToAPI = () => {
        axios.post(`http://localhost:3004/posts`,this.state.formBlogPost).then((res) => {
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error', err); 
        })
    }

    // Hapus data di JSON
    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
    }


    // Add Data to Form
    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        formBlogPostNew['id'] = timeStamp;
        console.log(event.target.name);
        // Spesifik ke Title 
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log('value object formBlogPost', this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render (){
            return (
            <Fragment>
                <Container>
                    
                        <Card className="p-4 m-3">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Add Title Post</Form.Label>
                                    <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.handleFormChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Add Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="body" placeholder="Enter Description" onChange={this.handleFormChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                            </Form>
                        </Card>
                        <Row xs={1} md={2}>
                            {
                                this.state.post.map(post => {
                                    return(
                                        <Post key={post.id} data={post} remove={this.handleRemove}/>
                                    )
                                })
                            }
                     </Row>
                </Container>   
             </Fragment>
        )
    }
}

export default GridCardPost;