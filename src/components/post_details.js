import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { addComment } from "../actions/index";


class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {comment: ''};

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.props.match.params.id, this.state.comment);
        // this.setState({ comment: ''});
    }

    onInputChange(event) {
        this.setState({ comment: event.target.value });
    }

    render() {
        const { post }  = this.props;

        return (
            <div>
                <h3>Title: {post.title}</h3>
                <h6>Author: {post.author}</h6>
                <h6>Content: {post.content}</h6>
                <input placeholder="please enter your comment" className="form-control" onChange={this.onInputChange}/>
                <span>
                    <button className="btn btn-primary" onClick={this.onFormSubmit}>Add Comment</button>
                </span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts
    };
}

export default connect(mapStateToProps, { fetchPost, addComment })(PostDetails);


