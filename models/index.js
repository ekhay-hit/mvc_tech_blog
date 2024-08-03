// requiring the modles
const Post = require("./Post");
const Comment = require("./Comment");
const User = require("./User")

// post association
Post.hasMany(Comment,{
    foreignKey: "post_id"
})
Post.belongsTo(User,{
    foreignKey:"user_id"
})

// user association
User.hasMany(Comment,{
    foreignKey:"user_id"
})

User.hasMany(Post,{
    foreignKey:"user_id"
})

// comments association
Comment.belongsTo(Post,{
    foreignKey:"post_id"
})

Comment.belongsTo(User,{
    foreignKey:"user_id"
})

