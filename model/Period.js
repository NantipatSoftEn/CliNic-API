'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('period', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        periodTime: {
            field: 'period_time',
            type: DataTypes.DATE,
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        maxUser:{
            field: 'max_user',
            type: DataTypes.INTEGER(10),
            primaryKey: false,
            allowNull: false,
        },
        countUser:{
            field: 'count_user',
            type: DataTypes.INTEGER(10),
            primaryKey: false,
            allowNull: false,
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