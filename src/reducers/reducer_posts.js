import { FETCH_POSTS } from "src/actions/index";
import { FETCH_POST } from "src/actions";
import { ADD_COMMENT } from "src/actions";

export default function(state = {}, action) {

    switch (action.type) {
        case FETCH_POSTS: {
            return action.payload.posts;
        }
        case FETCH_POST: {
            return action.payload[0];
        }
        case ADD_COMMENT: {
            return action.payload;
        }
        default :
            return state;
    }
}