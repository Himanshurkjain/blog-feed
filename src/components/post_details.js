import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, addComment, fetchComments } from '../actions';
import {map} from 'lodash';

class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            username: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id);
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log('comment--', this.username.value);
        const comments = {
            id: this.props.match.params.id + Math.floor(Math.random() * 1000),
            postId: this.props.match.params.id,
            parentId: null,
            user: this.username.value ? this.username.value : 'anonymous',
            date: new Date(),
            content: this.comment.value
        }
        this.username.value = '';
        this.comment.value = '';
        this.props.addComment(comments);
    }


    renderComments() {
        const {comments} = this.props.post;

        return map(comments, (comment) => {
            return (
                <tr key={comment.id}>
                    <td>{comment.user}</td>
                    <td>{comment.content}</td>
                </tr>
            )
        })

    }

    render() {
        const { post }  = this.props;

        return (
            <div>
                <dl className="dl-horizontal">
                    <dt>Title</dt>
                    <dd>{post.title}</dd>
                    <dt>Author</dt>
                    <dd>{post.author}</dd>
                    <dt>Publish Date</dt>
                    <dd>{post.publish_date}</dd>
                    <dt>Content</dt>
                    <dd>{post.content}</dd>
                </dl>
                <table>
                    <thead>
                    <th>Username</th>
                    <th>Comments</th>
                    </thead>
                    {this.renderComments()}
                </table>
                <fieldset>
                    <label>
                        Add Comment
                    </label>
                    <textarea  placeholder="type something .."  className="form-control" ref={(input) => { this.comment = input; }} />
                    <label>
                        Enter Your Username
                    </label>
                    <input placeholder="username" className="form-control" ref={(input) => { this.username = input; }} />
                </fieldset>
                <button className="btn btn-primary" onClick={this.onFormSubmit}>Add Comment</button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts
    };
}

export default connect(mapStateToProps, { fetchPost, addComment, fetchComments })(PostDetails);


