import React from 'react';
import { useSelector } from "react-redux";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginComponent from "./components/Login/LoginComponent";
import MyPage from "./components/MyPage/MyPage";

function App() {
  const user = useSelector(state => state.user);

  return (
      <>
        {user.name !== "" ? <MyPage /> : <LoginComponent />}
      </>
  )
}

export default App