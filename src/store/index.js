import {createStore} from 'redux';
import simpleReducer from '../reducers/index.js';

const store = createStore(
    simpleReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
