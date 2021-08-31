// configureStore.js
import {createWrapper}  from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware(); // saga 설정
    const middlewares = [sagaMiddleware]; // saga 설정
    const enhancer = process.env.NODE_ENV === 'production' 
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));
    
    const store = createStore(reducer, enhancer); // store는 state와 reducer를 포함한것
    store.sagaTesk = sagaMiddleware.run(rootSaga); // saga 설정
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development'
});

export default wrapper;
