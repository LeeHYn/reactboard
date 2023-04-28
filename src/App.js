import React from 'react';
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginComponent from "./components/Login/LoginComponent";
import MyPage from "./components/MyPage/MyPage";
import SignUp from "./components/Signup/SignUp";
import BoardPage from "./components/Board/BoardPage.jsx";


function App() {
  const user = useSelector(state => state.user);


  return (
      <>
          <Routes>
              <Route path={"/"} element={user.name !== "" ? <MyPage/>  : <LoginComponent/> }/>
              <Route path={"/SignUp"} element={<SignUp/>}/>
              <Route path={"/BoardPage"} element={<BoardPage/>}/>
          </Routes>
      </>
  )
}

export default App