const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Workouts extends Model {}

Workouts.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        workout:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        sets:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        reps:{
            type:DataTypes.INTEGER,
            allowNull: false,
        weight:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
        },
        personal_record:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        improvements: {
            type:DataTypes.STRING,
            allowNUll: false,
        },
        datestamp: {
            type:DataTypes.DATE,
            allowNull: false,
        }
    },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: "workouts",
        }
    );
    
module.exports = Workouts


