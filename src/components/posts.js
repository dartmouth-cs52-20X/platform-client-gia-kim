/* eslint-disable max-len */
/* eslint-disable react/no-danger */
// default page listing all posts
// use post id to link to full view
// show coverUrl, title, tags in some form - can be a list, can be tiles, whatever you want!
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import marked from 'marked';
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
            <div id="displaybox">
                <Link to={`/posts/${post.id}`} key={post.id} id="display">
                    <div className="urlcontainter" dangerouslySetInnerHTML={{ __html: marked(post.coverUrl || '') }} />
                    <div className="titlecontainer">{post.title}</div>
                    <div className="tagscontainer">{post.tags}</div>
                </Link>
            </div>
        );
    }

    displayFilteredPosts = () => {
        if (this.props.all) {
            return this.props.all.map((post) => {
                console.log(this.props.filter);
                if (this.props.filter === '') {
                    return this.displayPost(post);
                } else if (post.tags.toLowerCase().includes(this.props.filter.toLowerCase()) || post.title.toLowerCase().includes(this.props.filter.toLowerCase()) || post.content.toLowerCase().includes(this.props.filter.toLowerCase())) {
                    return this.displayPost(post);
                } else return null;
            });
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className="displayposts">
                    {this.displayFilteredPosts()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    all: reduxState.posts.all,
    filter: reduxState.posts.filter,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
