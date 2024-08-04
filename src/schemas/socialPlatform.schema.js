const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const SocialPlatform = sequelize.define('socialPlatform', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING,     // platform name
    },
    slug: {
        type: DataTypes.STRING,     //  lowercase value seperated with '_'
        validate: {
            isLowercase: true
        }
    },
    logoURL: {
        type: DataTypes.STRING,     // platform logo url
    },
    profileURL: {
        type: DataTypes.STRING      // profile url
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



module.exports = SocialPlatform;