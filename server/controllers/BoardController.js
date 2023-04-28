const db = require("../models");
const BoardPage = db.boards;


const getBoards = async (req, res) => {
    try {
        const board = await BoardPage.findAll({
            limit:5,
        })

        if(board===null){
           return res.status(400).send('Bed Reqeuest')
        }else {
           return res.status(200).send({data:board.dataValues})
            console.log( res.status(200).json({data:board.dataValues}))
        }
    }catch (err) {
        console.log(err)
    }

};

module.exports = {
    getBoards
}
