const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequilize");

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
        freezeTabelName:true,
        underscored: true,
        modleName:'post'
    }
)

module.exports= Post;