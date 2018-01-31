/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';
import 'src/app.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


// React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import ListPosts from './components/list_posts'
import PostDetails from './components/post_details'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render((
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/posts/:id' component={PostDetails}/>
                    <Route path='/' component={ListPosts}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.querySelector('.container'));
