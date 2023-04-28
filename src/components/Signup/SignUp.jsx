import React, {useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";


function LoginComponent() {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [checkId,setCheckId] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

   const checkIDset =() =>{

        if(!id){
            return alert("NAME을 입력하세요")
        }
        let body = {
            id
        }
        axios.post("http://localhost:8080/api/user/checkId", body)
            .then(res => {

                const code = res.data.code;
                if (code === 404) {
                    alert("존재하는 id입니다.")
                } else if (code === 200) {
                    // eslint-disable-next-line no-restricted-globals
                    let retrunValue = confirm("ID중복 확인에 성공하셧습니다");
                    alert(retrunValue)
                    return true;
                }
            })
    }


    const SignUpFunc = () => {

        if (!name) {
            return alert("NAME를 입력하세요.");
        } else if (!id) {
            return alert("ID를 입력하세요.");
        } else if (!password) {
            return alert("Password를 입력하세요.");
        }
        let body = {
            id,
            password,
            name
        }
            axios.post("http://localhost:8080/api/user/addUser", body)
                .then(res => {
                    // eslint-disable-next-line no-restricted-globals
                    let retrunValue = confirm("회원가입에 성공사셧습니다 로그인하시겠습니가?", navigate("/Login"));
                    const code = res.data.code;
                    if (code === 401) {
                        alert("존재하지 않는 id 혹은 비밀번호입니다.")
                    } else if (code === 200) {
                        alert(retrunValue)
                    }
                })
    }


    return (
        <>
            <h1>SignUpComponent</h1>
            <form

                className="login-wrap"
            >
                <input
                    type="text"
                    placeholder='이름'
                    className='name'
                    onChange={e => setName(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder='아이디'
                    className='id'
                    onChange={e => setId(e.target.value)}
                />
                <button onClick={checkIDset}>ID 중복체크</button>
                <br/>
                <input
                    type="password"
                    placeholder='비밀번호'
                    className='pw'
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>
                <button
                    type="button"
                    className='btn'
                    onClick={e=>SignUpFunc()}
                    >
                    회원가입
                </button>
            </form>
        </>
    )
}

export default LoginComponent;