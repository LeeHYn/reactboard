import React, { useState } from "react"
import {useDispatch} from "react-redux";
import { loginUser } from "../../reducer/userSlice";
import axios from "axios";
import {Link, useHref} from "react-router-dom";




function LoginComponent() {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const LoginFunc = () => {
        if (!id) {
            return alert("ID를 입력하세요.");
        }
        else if (!password) {
            return alert("Password를 입력하세요.");
        }
        let body = {
            id:id,
            password:password
        }

        console.log(body);

        axios.post("http://localhost:8080/api/user/SignInUser", body)
            .then(res => {
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
                className="login-wrap"
            >
                <input
                    type="text"
                    id='id'
                    placeholder='아이디'
                    className='id'
                    onChange={e => setId(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    id='password'
                    placeholder='비밀번호'
                    className='pw'
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button
                    type="button"
                    className='btn'
                    onClick={e => LoginFunc()}
                >
                    로그인
                </button>
            </form>
            <Link to={"/SignUp"}>
            <button>
                회원가입
            </button>
            </Link>
        </>
    )
}
export default LoginComponent;