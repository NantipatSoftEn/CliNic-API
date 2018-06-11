'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('symptom', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        symptomname: {
            field: 'symptomname',
            type: DataTypes.STRING(191),
            primaryKey: false,
            // allowNull: false,
            autoIncrement: false,
        },
        other:{
            field: 'other',
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