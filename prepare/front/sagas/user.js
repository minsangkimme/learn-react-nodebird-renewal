import {all, fork, put, delay, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data);
        console.log('saga logIn');
        yield delay(1000);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data
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
        // const result = yield call(logOutAPI);
        yield delay(1000);
        //  put 은 dispatch 와 동일한 느낌
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    // LOGIN이라는 action이 실행될 때까지 기다리겠다.
    // yield take 는 일회용 이벤트 리스너라 한번 사용하고 나면 사라진다.
    // 방법 1. while로 무한루프를 이용해서 사용한다.
        // while take 문법은 직관적이지 않은 단점이 있음. 같은 기능을 하는 takeEvery 가 있음.
        // while take 문법은 동기적으로  동작
        // takeEvery 는 비동기로 동작한다는 차이가 있습니다. 
        // takeLatest 는 (연속 요청 된 경우) 마지막 응답만 받아들인다. 보통 이것 사용
         //  ex) 연속 된 요청이 2번 이라면 2번 요청되고, 마지막 응답만 받아들여진다.
        // takeLeading 은 첫번째 응답만 받아들인다.

        yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
        yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ]);
}