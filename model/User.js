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
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: true,
            autoIncrement: false,
        },
        lastname: {
            field: 'password',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: true,

        },
        telephone: {
            field: 'telephone',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: true,
        },
        gender: {
            field: 'gender',
            type: DataTypes.ENUM('male', 'female'),
            allowNull: true,
        },
        symptomId: {
            field: 'symptom_id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: true,
        },
        typeUser: {
            field: 'typeuser',
            type: DataTypes.INTEGER(1),
            primaryKey: false,
            allowNull: true,
        },
        status: {
            field: 'status',
            type: DataTypes.STRING(1),
            primaryKey: false,
            allowNull: true,
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