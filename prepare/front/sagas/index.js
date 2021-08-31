import {all, fork, take, put} from 'redux-saga/effects';
import axios from 'axios';


function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}


function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        const result = yield call(logOutAPI);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}


function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    // LOGIN이라는 action이 실행될 때까지 기다리겠다.
    yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}



// rootSaga를 만들어 놓고 그 안에 비동기 action들을 넣는다.
export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ])

    // all은 배열을 받고 배열안에 있는 것들을 한 번에 실행함.
    // fork 나 call 로 제너레이트 함수를 실행한다는 의미임.
    // fork와 call은 차이점이 있음
    // fork는 비동기 함수 호출
    // call은 동기 함수 호출
}