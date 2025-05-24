import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { forumPostReducer, serviceReducer, userReducer } from './reducers';

const reducer = combineReducers({
	forumPost: forumPostReducer,
	service: serviceReducer,
	user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
