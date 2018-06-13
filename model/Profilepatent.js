'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('profilepatent', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId:{
            field:'user_id',
            type:DataTypes.INTEGER(10).UNSIGNED,
            primaryKey:true,
            allowNulll:false,
            autoIncrement: false,
        },
        medicineId:{
            field: 'medicine_id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false 
        },
        diagnose:{
            field: 'diagnose',
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