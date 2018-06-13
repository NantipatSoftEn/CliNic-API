'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('dateclose', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        date:{
            field: 'date',
            type: DataTypes.DATE,
            rimaryKey: false,
            autoIncrement: false,
        },
        house:{
            field: 'house',
            type: DataTypes.TIME,
            rimaryKey: false,
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