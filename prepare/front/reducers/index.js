import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers } from 'redux';
import user from './user';
import post from './post';


//  combineReducers 리듀서 합쳐주는 역할

// redux 서버사이드랜더링을 위해서 HYDRATE 라는 것을 넣어주려면  rootReducer에 intex 키로 리듀서를 추가한다.

// reducer는 이전상태 와 액션을 통해 다음상태를 만든다.
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
});
    

export default rootReducer;