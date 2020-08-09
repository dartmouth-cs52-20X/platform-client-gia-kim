/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
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
                <Alert variant="filled" severity="error">
                        Fill in all of the components!
                </Alert>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <Typography variant="h5" gutterBottom>
                    Title
                </Typography>
                <input onChange={this.onHandleChange} value={this.state.title} name="title" placeholder="your note title" />
                <Typography variant="h5" gutterBottom>
                    Content
                </Typography>
                <input onChange={this.onHandleChange} value={this.state.content} name="content" placeholder="your note content" />
                <Typography variant="h5" gutterBottom>
                    Cover image URL
                </Typography>
                <input onChange={this.onHandleChange} value={this.state.coverUrl} name="coverUrl" placeholder="your cover image url" />
                <Typography variant="h5" gutterBottom>
                    Tags
                </Typography>
                <input onChange={this.onHandleChange} value={this.state.tags} name="tags" placeholder="your note tags" />
                <Button
                  variant="contained"
                  color="primary"
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
