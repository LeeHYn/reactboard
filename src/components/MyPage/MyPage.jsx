import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {clearUser} from "../../reducer/userSlice";

function MyPage() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const LogoutFunc = () => {
        dispatch(clearUser(user));
    }
    return (
        <>
            <h1>MyPage</h1>
            <p>{`(${user.name})`}님, 안녕하세요!</p>
            <button onClick={() => LogoutFunc()}>로그아웃</button>
        </>
    )
}

export default MyPage