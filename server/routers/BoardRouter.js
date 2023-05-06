const BoardRouter = require("../controllers/BoardController.js")
const boardRouter = require("express").Router();

boardRouter.get("/board/getBoards", BoardRouter.getBoards);
boardRouter.delete("/board/boardDelete",BoardRouter.boardDelete)
module.exports = boardRouter;
