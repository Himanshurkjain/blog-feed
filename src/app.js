/**
 * @overview Application entry point.
 */
// Global application styles
import 'src/app.scss';
import 'src/app.scss';
import { Provider } from 'react-redux';

// React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import ListPosts from './components/list_posts'
import PostDetails from './components/post_details'

import configureStore from './store/configureStore';

const store = configureStore();


render((
    <Provider store={store}>
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
