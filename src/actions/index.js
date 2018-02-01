import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const ADD_COMMENT = 'add_comment';
export const FETCH_COMMENTS = 'fetch_comments';
export const POST_COMMENT = 'post_comment';
const BASE_URL = 'http://localhost:9001/posts';

export function fetchPosts() {
   const request = axios.get(BASE_URL);
   return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type:FETCH_POSTS, payload: data});
        });
   };
}

export function fetchPost(id) {
    const request = axios.get(`${BASE_URL}/${id}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type:FETCH_POST, payload: data});
        });
    };
}

export function addComment(comment) {
    const request = axios.post(`${BASE_URL}/${comment.postId}/comments`, comment);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type:ADD_COMMENT, payload: comment});
        });
    };
}

export function postComment(id) {
    axios.get(`${BASE_URL}/${id}/comments`);

    return {
     type:POST_COMMENT, payload: 'comment added'
    }
}

export function fetchComments(id) {
    const request = axios.get(`${BASE_URL}/${id}/comments`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type:FETCH_COMMENTS, payload: data});
        });
    };
}
