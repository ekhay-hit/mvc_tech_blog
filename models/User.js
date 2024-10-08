const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection")
const bcrypt = require('bcrypt');
const Post = require('./Post');
const Comments = require('./Comment')

class User extends Model{};
// Model initialization
User.init(
    {
        id:{
            type :DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail:true,
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6],
            }
        }

    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
              newUser.password = await bcrypt.hash(newUser.password, 8);
              return newUser;
            },
        },
        sequelize,
        freezeTableName :true,
        underscored:true,
        modelName:'user'
    }
);
module.exports= User;