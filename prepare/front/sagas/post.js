import { all, fork, put, delay, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'ADD_POST_SUCCESS',
            // data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}



function* watchAddPost() {
        yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}