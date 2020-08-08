// default page listing all posts
// use post id to link to full view
// show coverUrl, title, tags in some form - can be a list, can be tiles, whatever you want!
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
      this.props.fetchPosts(this.props.match.params.postID);
    }

    displayPost = (post) => {
        return (
            <div>
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <div className="urlcontainter">{post.coverUrl}</div>
                    <div className="titlecontainer">{post.title}</div>
                    <div className="tagscontainer">{post.tags}</div>
                </Link>
            </div>
        );
    }

    render() {
        return (
            this.props.all.map((post) => { return this.displayPost(post); })
        );
    }
}

const mapStateToProps = (reduxState) => ({
    all: reduxState.posts.all,
  });

export default connect(mapStateToProps, { fetchPosts })(Posts);
