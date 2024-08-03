const {Model, DataType, DataTypes}= require("sequelize");
const sequelize = require("../config/connection")

class Post extends Model{};

Post.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type: DataTypes.TEXT,
            allowNull:false,
        },
        user_id:{
          type: DataTypes.INTEGER,
          references:{
            model:"user",
            key:"id"
          }
        }
    },
    {
        sequelize,
        freezeTableName:true,
        underscored: true,
        modelName:'post'
    }
)

module.exports= Post;