const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const techCategory = require("./techCategory.schema");

const Tech = sequelize.define('tech', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING,     // tech name
    },
    slug: {
        type: DataTypes.STRING,     //  lowercase value seperated with '_'
        validate: {
            isLowercase: true
        }
    },
    logoURL: {
        type: DataTypes.STRING,     // logo of tech
    },
    techCategoryId: {
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

Tech.belongsTo(techCategory, {
    as : 'techCategory',
    foreignKey: 'techCategoryId',
    targetKey: 'id'
})

module.exports = Tech;