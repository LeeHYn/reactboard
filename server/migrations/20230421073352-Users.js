"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.createTable("Users", {
            id: {
                type: Sequelize.INTEGER(11),
                notNull: true,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: Sequelize.STRING(35),
                notNull: true,
            },
            password: {
                type: Sequelize.STRING(20),
                notNull: true,
            },name:{
                type: Sequelize.STRING(20),
                notNull:true,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        queryInterface.dropTable("Users");
    },
};
