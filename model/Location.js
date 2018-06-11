'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('locations', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
        },
        latitude: {
            field: 'latitude',
            type: DataTypes.DECIMAL(15, 8),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        longitude: {
            field: 'longitude',
            type: DataTypes.DECIMAL(15, 8),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        speed: {
            field: 'speed',
            type: DataTypes.DECIMAL(15, 8),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        accuracy: {
            field: 'accuracy',
            type: DataTypes.DECIMAL(15, 8),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
            allowNull: true,
        },
    });
}