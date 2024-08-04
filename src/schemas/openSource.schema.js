const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const OpenSource = sequelize.define('openSource', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    description: {
        type: DataTypes.TEXT        // open source project description
    },
    url: {
        type: DataTypes.STRING      // url of the open source project
    },
    githubURL: {
        type: DataTypes.STRING      // github repo url of the open source project
    },
    userId: {
        type: DataTypes.UUIDV4,     // user
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

module.exports = OpenSource;