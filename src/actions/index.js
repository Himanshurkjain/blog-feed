import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const ADD_COMMENT = 'add_comment';
export const content = {
    "posts": [{
        "id": 1,
        "title":"Blog post #1",
        "author": "Melissa Manges",
        "publish_date": "2016-02-23",
        "slug": "blog-post-1",
        "description": "Utroque denique invenire et has.",
        "content": "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>"
    }, {
        "id": 2,
        "title":"Blog post #2",
        "author": "Olene Ogan",
        "publish_date": "2016-03-16",
        "slug": "blog-post-2",
        "description": "Ex legere perpetua electram vim, per nisl inermis quaestio ea.",
        "content": "<p>Ex legere perpetua electram vim, per nisl inermis quaestio ea. Everti adolescens ut nec. Quod labitur assueverit vis at, sea an erat modus delicata.</p> <p>Dico omnesque epicurei te vix. Tota verterem temporibus eu quo, eu iudicabit repudiandae sea. Elitr nihil gloriatur vis in.</p>"
    }]
}


export function fetchPosts() {

    var request = axios.get('http://localhost:9001/posts');

   return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type:FETCH_POSTS, payload: data});
        });
   };
}

export function fetchPost(id) {
    const result = content.posts.filter(element => {
        return element.id == id;
    });

    return {
        type: FETCH_POST,
        payload: result
    }
}

export function addComment(id, comment) {

    return {
        type: ADD_COMMENT,
        payload: 'comment has been added'
    }

}
