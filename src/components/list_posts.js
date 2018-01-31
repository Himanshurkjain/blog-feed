import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ListPosts extends  Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const posts = this.props.posts;
        if(posts) {
            return _.map(posts, post => {
                return (
                    <tr key={post.id}>
                        <td>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </td>
                        <td>{post.author}</td>
                        <td>{post.publish_date}</td>
                        <td>{post.description}</td>
                    </tr>
                );
            })
        }
    }


    render() {
        return (
            <div>
                <h3>Feed Posts</h3>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderPosts()}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts }) (ListPosts);