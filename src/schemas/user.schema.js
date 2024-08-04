const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const Role = require("./role.schema");
const Blog = require("./blog.schema");

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,       // unique id 
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    firstName: {
        type: DataTypes.STRING,     // first name
    },
    lastName: {
        type: DataTypes.STRING      // last name
    },
    email: {
        type: DataTypes.STRING,     // email
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,     // phone number
    },
    aboutMe: {
        type: DataTypes.TEXT        // about me
    },
    roleId: {
        type: DataTypes.UUIDV4,     // role
        validate: {
            isUUID: 4
        }
    }
}, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
});

User.belongsTo(Role, {
    as: "role",
    foreignKey: 'roleId',
    targetKey: 'id'
});

User.belongsTo(Blog, {
    type: 'blog',
    foreignKey: 'id',
    targetKey: 'userId'
})

module.exports = User;