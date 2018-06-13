'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('reseration', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        queue: {
            field: 'queue',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        userId:{
            field:'user_id',
            type:DataTypes.INTEGER(10).UNSIGNED,
            primaryKey:true,
            allowNulll:false,
            autoIncrement: false,
            references: {
                model: "users",
                key: "id"
            }
        },
        periodId:{
            field: 'period_id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
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