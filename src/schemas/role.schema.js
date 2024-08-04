const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const User = require("./user.schema");

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    role: {
        type: DataTypes.STRING      // role
    },
    slug: {
        type: DataTypes.STRING,     //  lowercase value seperated with '_'
        validate: {
            isLowercase: true
        }
    }
}, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
});

Role.hasMany(User, {
    type: 'user',
    foreignKey: 'id'
});

module.exports = Role;