const sequelize = require("../config/connection");
const {Model, DataTypes}= require("sequelize")
const User = require('./User');
const Comments = require('./Comment')

class Comment extends Model{}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        post_id:{
          type: DataTypes.INTEGER,
          references:{
            model:"post",
            Key:"id"
          }  
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:"user",
                Key:"id",
            }

        }

    },
    {
        sequelize,
        freezeTabelName:true,
        underscored:true,
        modelName:"comment"

    }
);
module.exports= Comment;
