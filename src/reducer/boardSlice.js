import {createSlice} from "@reduxjs/toolkit";
import {INTEGER} from "sequelize";

export const boardSlice = createSlice({
    name: "board",
    initialState: {
        lastId:0,
        inputData:[
            {
                boardNum: "",
                boardTitle:"",
                boardTime:"",
                boardContext:"",
            }
        ],
        selectRowData:{}
    },
    reducers: {
        getBoard: (state, action) => {
            state.boardNum = (INTEGER)(action.payload.data.boardId);
            state.boardTitle = (String)(action.payload.data.boardTitle);
            state.boardTime = (String)(action.payload.data.createdAt);
            state.boardContext =(String)(action.payload.data.createdAt);
            // state 변화를 알림
            return state;
        },
    },
});

export const {getBoard} = boardSlice.actions;
export default boardSlice.reducer;