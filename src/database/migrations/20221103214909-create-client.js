'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,        
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      
      mother_name: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      father_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      cpf: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      birth_date: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull: false,
      }  
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients')
  }
};
