// configureStore.js
import {createWrapper}  from 'react-redux-wrapper';
import {createStore} from 'redux';


const configureStore = () => {
    const store = createStore(reduceer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development'
});

export default wrapper;
