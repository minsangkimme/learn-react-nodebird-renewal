import {React, useCallback} from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card   
            actions={[
                <div key="twit">짹쨱<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="follower">팔로워<br />0</div>,
            ]}
        >            
            <Card.Meta 
                avatar={<Avatar>MS</Avatar>}
                title="minsang"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;