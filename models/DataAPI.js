'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('datapi', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        Action:{
            field: 'action',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        PathParameters:{
            field: 'pathparameters',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        Respone:{
            field: 'respone',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        data:{
            field: 'data',
            type: DataTypes.STRING(191),
            primaryKey: false,
            autoIncrement: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
    });
}