const db = require("../models");
const { Op } = require("sequelize");
const User = db.users;


//nameCheck
const checkId = async (req,res) =>{
    try{
        let userId = req.body.id;
        const user = await User.findOne({
            where: {
                [Op.or]: [{ UserId: userId }],
            },
        });
        console.log(res.json)
        if (user === null) {
            return  res.send({code:200})
        } else {
            return res.send({code:404});
        }
    }catch (err){
        console.log(err)
    }

}

//create
const addUser = async (req, res) => {
    let info = {
        name: req.body.name,
        userId:req.body.id,
        password: req.body.password,
    };
    const user = await User.create(info).then(res.send({code: 200})).catch((err) => {
        res.send({code: 401})
        console.log(err)
    });
};

const oneUser = async (req, res ) => {
    let username = req.body.id;
    let password = req.body.password;

        await User.findOne({where: {userId: username, password: password}}).then(result => {
            res.status(200).json({code: 200, data: result.dataValues})
            console.log(res.json({code: 200, data: result.dataValues}))
        }).catch((err) => {
            res.send({code: 401})
        })

};
//update

const updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, {where: {id: id}}).catch((err) =>
        console.log(err)
    );
    res.status(200).send(user);
};

//delete

const deleteUser = async (req, res) => {
    let id = req.params.id;
    await User.destroy({where: {id: id}}).catch((err) => console.log(err));
    res.status(200).send("User is deleted");
};

module.exports = {
    addUser,
    checkId,
    oneUser,
    updateUser,
    deleteUser,
};
