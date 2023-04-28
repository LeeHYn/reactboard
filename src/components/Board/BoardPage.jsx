import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getBoard} from "../../reducer/boardSlice";

function BoardPage(){

    const [initLastIdx, setInitLastIdx] = useState(0)
    const dispatch = useDispatch();
    const board = useSelector(state =>state.board);
    const BoardFunc =()=>{
        axios.get("http://localhost:8080/api/board/getBoards").then(res=>{
            dispatch(getBoard(res.data))
        })

    }
    useEffect(
        axios.get("http://localhost:8080/api/board/getBoards").then(res=>{
            dispatch(getBoard(res.data))
        },[]))

    return(
        <>
            <h1>ss</h1>
            <div>
                <table className='listTable'>
                    <tbody>
                    <tr>
                        <td className='listTableIndex th'>index</td>
                        <td className='listTableTitle th'>title</td>
                        <td className='listTableTitle th'>time</td>
                    </tr>
                    {board.lastId !== 0 ? // lastId 가 0이 아닐때만 목록을 보여준다.
                        board.inputData.map(rowData => (
                            rowData.boardNum !== '' && // rowData의 id 가 ''이 아닐때 목록을 보여준다.
                            <tr>
                                <td className='listTableIndex'>{rowData.boardNum}</td>
                                <td className='listTableTitle'>{rowData.boardTitle}</td>
                                <td className={'listTablecreateTime'}>{rowData.boardTime}</td>
                            </tr>
                        )) :  // 작성된 목록이 없을 때 보여줄 내용
                        <tr>
                            <td className='listTableIndex'></td>
                            <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                            <td className={'listTablecreateTime'}></td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BoardPage