import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    },
}


//  action
// const chagneNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// }


// action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction =  () => {
    return {
        type: 'LOG_OUT',
    }
}
// changeNickname('nunu');  // nunu


// reducer는 이전상태 와 액션을 통해 다음상태를 만든다.
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return {...state, ...action.payload};
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }

        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
        
        default:
            return state;
    }
}

export default rootReducer;