module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER(11),
                notNull:true,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.STRING(20),
                notNull:true,
            },
            password: {
                type: DataTypes.STRING(20),
                notNull:true,
            },
            name: {
                type: DataTypes.STRING(20),
                notNull:true,
            },
        },
        {
            timestamps: false,
        }
    );
    return User;
};
