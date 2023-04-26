const db = require("../models");
const {memo} = require("react");

const User = db.users;

//create
const addUser = async (req, res) => {
    let info = {
        username: req.body.id,
        password: req.body.password,
    };

    const user = await User.create(info).catch((err) => console.log(err));
    res.status(200).send(user);
};

//Road
/*const getAllUsers = async (req, res) => {
  let users = await User.findAll({}).catch((err) => console.log(err));
  res.status(200).send(users);
};*/

const oneUser = async (req, res ,next) => {
    let username = req.body.id;
    let password = req.body.password;

        await User.findOne({where: {userId: username, password: password}}).then(result => {
            res.status(200).json({code: 200, data: result.dataValues})

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
    oneUser,
    updateUser,
    deleteUser,
};
