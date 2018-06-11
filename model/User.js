'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        refId: {
            field: 'ref_id',
            type: DataTypes.STRING(100),
            primaryKey: false,
            allowNull: true,
            autoIncrement: false
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
      
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
         
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
    });
    
    
}