/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/heading-has-content */
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
  }, this.props.history);
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
    console.log(this.props.currentPost);
    if (this.state.isEditing) {
        return (
          <div>
            <div id="icon">
              <Button
                id="icons"
                variant="contained"
                color="primary"
                id="icon"
                startIcon={<SaveAltIcon />}
                onClick={this.stopEditing}
              >
                Save
              </Button>
            </div>

            <div className="postbox">
              <h4>
                edit your title
              </h4>
              <input type="text" className="titlecontainer" onChange={this.editTitle} value={this.state.editTitle} />
              <h4>
                edit your content
              </h4>
              <input type="text" className="contentcontainer" onChange={this.editContent} value={this.state.editContent} />
              <h4>
                edit your cover url
              </h4>
              <input type="text" className="urlcontainer" onChange={this.editUrl} value={this.state.editUrl} />
              <h4>
                edit your tags
              </h4>
              <input type="text" className="tagscontainer" onChange={this.editTags} value={this.state.editTags} />
            </div>
          </div>
        );
    } else {
        return (
          <div>
            <div id="icon">
            <Button
              id="icons"
              variant="contained"
              color="default"
              id="icon"
              startIcon={<EditIcon />}
              onClick={this.startEditing}
            >
              Edit
            </Button>
            </div>

            <div className="postbox">
              <div className="titlecontainer">{this.props.currentPost.title}</div>
              <div className="authorcontainer"><p>author:</p>{this.props.currentPost.author}</div>
              <div className="contentcontainer" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
              <div className="urlcontainer" dangerouslySetInnerHTML={{ __html: marked(`![](${this.props.currentPost.coverUrl})` || '') }} />
              <div className="tagscontainer">{this.props.currentPost.tags}</div>
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
          <div className="editthis">
            <h1 />
          </div>

        <div id="icon">
                  <Button
                    variant="contained"
                    color="secondary"
                    id="icon"
                    startIcon={<DeleteIcon />}
                    onClick={this.deletePost}
                  >Delete
                  </Button>
        </div>

          {this.renderPosts()}

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
