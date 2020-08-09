/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Alert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createPost } from '../actions/index';
// connected component that can trigger actions via ActionCreators.

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            coverUrl: '',
            tags: '',
            error: false,
        };
    }

    newPost = () => {
        if (this.state.title === '' || this.state.content === '' || this.state.coverUrl === '' || this.state.tags === '') {
            this.setState({
                error: true,
            });
        } else {
            this.props.createPost(this.state, this.props.history);
        }
    }

    onHandleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    renderError() {
        if (this.state.error) {
            return (
                <Alert variant="filled" severity="error" id="error">
                        Fill in all of the components!
                </Alert>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="createpostbox">
                <div className="typewriter2">
                    <h1>What is on your mind? How are you, really?</h1>
                </div>
                {this.renderError()}
                <div className="createpost">
                    <h4>
                        Title
                    </h4>
                    <input type="text" onChange={this.onHandleChange} value={this.state.title} name="title" placeholder="your amazing post title" />
                    <h4>
                        Content
                    </h4>
                    <TextareaAutosize input type="text" id="textsize" rowsMin={6} onChange={this.onHandleChange} value={this.state.content} name="content" placeholder="your lovely post content" />
                    <h4>
                        Cover image URL
                    </h4>
                    <input type="text" onChange={this.onHandleChange} value={this.state.coverUrl} name="coverUrl" placeholder="your cool cover image url" />
                    <h4>
                        Tags
                    </h4>
                    <input type="text" onChange={this.onHandleChange} value={this.state.tags} name="tags" placeholder="your awesome tags" />
                </div>
                <Button className="post"
                  variant="contained"
                  color="secondary"
                  size="large"
                  id="postbut"
                  startIcon={<AddBoxIcon />}
                  onClick={this.newPost}
                >
                    Post
                </Button>
            </div>
        );
    }
}

export default withRouter(connect(null, { createPost })(NewPost));
