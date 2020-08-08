/* eslint-disable react/no-danger */
// display and edit
import { connect } from 'react-redux';
import React, { Component } from 'react';
import marked from 'marked';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { fetchPost, deletePost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editTitle: '',
      editContent: '',
      editUrl: '',
      editTags: '',
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  deletePost = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  startEditing = () => {
    this.setState({
        isEditing: true,
        editTitle: this.props.currentPost.title,
        editContent: this.props.currentPost.content,
        editUrl: this.props.currentPost.coverUrl,
        editTags: this.props.currentPost.tags,
    });
  }

  stopEditing = () => {
    this.props.updatePost(this.props.match.params.postID, {
      title: this.state.editTitle, content: this.state.editContent, coverUrl: this.state.editUrl, tags: this.state.editTags,
  });
    this.setState({
        isEditing: false,
    });
  }

  editTitle = (event) => {
    this.setState({ editTitle: event.target.value });
  }

  editContent = (event) => {
    this.setState({ editContent: event.target.value });
  }

  editUrl = (event) => {
    this.setState({ editUrl: event.target.value });
  }

  editTags = (event) => {
    this.setState({ editTags: event.target.value });
  }

  renderPosts() {
    if (this.state.isEditing) {
        return (
          <div>
            <input className="titlecontainer" onChange={this.editTitle} value={this.state.editTitle} />
            <input className="contentcontainer" onChange={this.editContent} value={this.state.editContent} />
            <input className="urlcontainer" onChange={this.editUrl} value={this.state.editUrl} />
            <input className="tagscontainer" onChange={this.editTags} value={this.state.editTags} />
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveAltIcon />}
              onClick={this.stopEditing}
            >
              Save
            </Button>
          </div>
        );
    } else {
        return (
          <div>
            <div className="titlecontainer">{this.props.currentPost.title}</div>
            <div className="contentcontainer" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
            <div className="urlcontainer">{this.props.currentPost.coverUrl}</div>
            <div className="tagscontainer">{this.props.currentPost.tags}</div>
            <Button
              variant="contained"
              color="default"
              startIcon={<EditIcon />}
              onClick={this.startEditing}
            >
              Edit
            </Button>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={this.deletePost}
        >
          Delete
        </Button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    currentPost: reduxState.posts.current,
  };
}

// enables this.props.currentPost
// and this.props.fetchPost, this.props.deletePost, and this.props.updatePost
export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post);
