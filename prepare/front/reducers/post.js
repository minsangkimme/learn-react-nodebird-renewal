//  User, Images, Comments는 왜 대문자 인가?
//  DB쪽에서 쓰는 시퀄라이저와 관계가 있음
//  어떤 정보와 다른 정보가 관계가 있으면  그것들을 합쳐줌
//  그런데 합쳐주는 얘들은 대문자가 되어서 반환됨 (설정을 통해서 소문자로 변경은 가능함)
// id,content 는 게시글(post)자체의 속성이고
//   User, Images, Comments는 다른 정보와 합쳐서 주기 때문에 얘내들은 대문자로 

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고싶어요~'
        }, {
            User: {
                nickname: 'nero',
            },
            content: '얼른 사고싶어요~!',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

// action 값을 상수로 빼줌 -> 재활용 가능성 높아짐
const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미 데이터 입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}


const reducer = ((state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], 
                postAdded: true,
            }
        default:
            return state;
    }
});

export default reducer;