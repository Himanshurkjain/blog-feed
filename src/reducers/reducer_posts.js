import { FETCH_POSTS } from "src/actions/index";
import { FETCH_POST } from "src/actions";
import { ADD_COMMENT } from "src/actions";

export default function(state = {}, action) {

    console.log('action', action);

    switch (action.type) {
        case FETCH_POSTS: {
            console.log('reducer:', action.payload);
            return action.payload;
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