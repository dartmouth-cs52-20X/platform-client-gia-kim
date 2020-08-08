import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from '@material-ui/core/Typography';
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
        };
    }

    newPost = () => {
        this.props.createPost(this.state, this.props.history);
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    handleContent = (event) => {
        this.setState({ content: event.target.value });
    }

    handleUrl = (event) => {
        this.setState({ coverUrl: event.target.value });
    }

    handleTags = (event) => {
        this.setState({ tags: event.target.value });
    }

    render() {
        return (
            <div>
                <Typography variant="h5" gutterBottom>
                    Title
                </Typography>
                <input onChange={this.handleTitle} value={this.state.title} placeholder="your note title" />
                <Typography variant="h5" gutterBottom>
                    Content
                </Typography>
                <input onChange={this.handleContent} value={this.state.content} placeholder="your note content" />
                <Typography variant="h5" gutterBottom>
                    Cover image URL
                </Typography>
                <input onChange={this.handleUrl} value={this.state.coverUrl} placeholder="your cover image url" />
                <Typography variant="h5" gutterBottom>
                    Tags
                </Typography>
                <input onChange={this.handleTags} value={this.state.tags} placeholder="your note tags" />
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
