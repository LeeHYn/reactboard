import 'react-data-grid/lib/styles.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export default function BoardPage() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'title',
            headerName: 'TITLE',
            width: 600,
            editable: true,
        },
        {
            field: 'time',
            headerName: 'time',
            width: 400,
            editable: true,
        },
    ];

    const [rows, setRows] = useState([])
    //게시판 보여주기
    const BoardRows = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/board/getBoards")
            console.log(res.data)
            const _rows = await res.data.map((rows) => ({
                    id: rows.boardId,
                    title: rows.boardTitle,
                    content: rows.boardContent,
                    time: rows.createdAt
                })
            )
            setRows(rows.concat(_rows))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        BoardRows()
    }, [])


    //게시판 열 삭제

    const boardDelete =()=>{
        try {
             axios.delete("http://localhost:8080/api/board/boardDelete")
        }catch (e){

        }


    }

    return (
        <Box sx={{height: "400", width: '100%'}}>
            <DataGrid columns={columns} rows={rows}
                      initialState={{
                          pagination: {
                              paginationModel: {
                                  pageSize: 3,
                              },
                          },
                      }}
                      pageSizeOptions={[3]}
                      checkboxSelection
                      disableRowSelectionOnClick
            />
            <button>조회</button>
            <button>수정</button>
            <button>삭제</button>
        </Box>

    )
}