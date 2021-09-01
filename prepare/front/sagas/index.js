import {all, fork} from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';


// rootSaga를 만들어 놓고 그 안에 비동기 action들을 넣는다.
export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);

    // all은 배열을 받고 배열안에 있는 것들을 한 번에 실행함.
    // fork 나 call 로 제너레이트 함수를 실행한다는 의미임.
    // fork와 call은 차이점이 있음
    // fork는 비동기 함수 호출
    // call은 동기 함수 호출
}