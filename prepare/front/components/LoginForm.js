import {React, useState, useCallback} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { loginAction } from '../reducers';
import {useDispatch} from 'react-redux';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');


    // component에 props로 넘기는 것은 무조건 useCallback을 사용해야 함 그래야 최적화 되기 때문임
    // const onChangeId = useCallback((e) => {
    //         setId(e.target.value);
    // }, []);

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    const onSubmitForm = useCallback(() => {
    // antd에 Form onFinish는 e.preventDefault(); 가 이미 적용되어 있어서 따로 추가작성 할 필요 없음.
    console.log(id, password);
    dispatch(loginAction({id, password}));
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
            <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>           
        </FormWrapper>
    )
}

export default LoginForm;