import React from 'react'
import localStorageService from '../../services/localStorageService'
import { Button } from 'antd';


function Profile(props) {

    const logout = () => {
        localStorageService.removeToken();
        props.setRole("guest");
    }

    return (
        <div>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}

export default Profile
