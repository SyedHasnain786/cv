const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Blog = sequelize.define('blog', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    siteURL: {
        type: DataTypes.STRING,     // site url of blog
    },
    thumbnailURL: { 
        type: DataTypes.STRING,     // thumbnail url to be displayed
    },
    title: {
        type: DataTypes.STRING,     // title of the blog
    },
    userId: {
        type: DataTypes.UUIDV4,     // author of blog
        validate: {
            isUUID: 4
        }
    },
}, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
});

module.exports = Blog;