const sequelize = require("../config/connection");

const {Model, DataTypes}= require("sequelize")

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
            modle:"post",
            Key:"id"
          }  
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                modle:"user",
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
module.exports=Comment;