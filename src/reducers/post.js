import { FETCH_POST, ADD_COMMENT, FETCH_COMMENTS, FETCH_POSTS, POST_COMMENT } from "src/actions";

export default function(state = {}, action) {

    switch (action.type) {
        case FETCH_POSTS: {
            return { ...action.payload, ...state };
        }
        case POST_COMMENT: {
            return { comments: state.comments.push(action.payload), ...state };
        }
        case FETCH_POST: {
            return { ...action.payload, ...state };
        }
        case FETCH_COMMENTS: {
            return { comments: action.payload, ...state };
        }
        case ADD_COMMENT: {
            return { comments: state.comments.push(action.payload), ...state };
        }
        default :
            return state;
    }
}