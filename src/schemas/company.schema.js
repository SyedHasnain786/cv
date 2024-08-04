const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const Achievement = require("./achievement.schema");
const User = require("./user.schema");

const Company = sequelize.define('company', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING      // name of the company
    },
    slug: {
        type: DataTypes.STRING,     //  lowercase value seperated with '_'
        validate: {
            isLowercase: true
        }
    },
    userId: {
        type: DataTypes.UUIDV4,     // user
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

Company.belongsTo(Achievement, {
    type: 'achievements',
    foreignKey: 'id'
});

Company.belongsTo(User, {
    type: 'user',
    foreignKey: 'userId'
});

module.exports = Company;