'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('medicine', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        medicineName:{
            field: 'medicine_name',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false 
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