import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUser } from "../../reducer/userSlice";
import axios from "axios";


function LoginComponent() {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const LoginFunc = (e) => {
        e.preventDefault();
        if (!id) {
            return alert("ID를 입력하세요.");
        }
        else if (!password) {
            return alert("Password를 입력하세요.");
        }
        let body = {
            id,
            password
        }

        axios.post("http://localhost:8080/api/SignInUser", body)
            .then(res => {
                console.log(res.data.code)
                const code = res.data.code;
                if (code === 401) {
                    alert("존재하지 않는 id혹은 비밀번호입니다.")
                }else if(code === 200){
                    dispatch(loginUser(res.data));
                }
            })
        }


    return (
        <>
            <h1>LoginComponent</h1>
            <form
                onSubmit={LoginFunc}
                className="login-wrap"
            >
                <input
                    type="text"
                    placeholder='아이디'
                    className='id'
                    onChange={e => setId(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder='비밀번호'
                    className='pw'
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button
                    type="submit"
                    className='btn'
                >
                    로그인
                </button>
            </form>
        </>
    )
}

export default LoginComponent;