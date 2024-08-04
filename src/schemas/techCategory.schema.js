const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const techCategory = sequelize.define('techCategory', {
    id: {
        type: DataTypes.UUID,       // unique id 
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING      // tech category name
    },
    slug: {
        type: DataTypes.STRING      // lowercase value seperated with '_'
    }
}, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
});

module.exports = techCategory;