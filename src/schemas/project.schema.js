const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Project = sequelize.define('project', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING,     // project name
    },
    subName: {
        type: DataTypes.STRING,     // sub name of project
    },
    description: {
        type: DataTypes.STRING,     // project descrition
    },
    workDescription: {
        type: DataTypes.STRING      // work description
    },
    frontendTech: {
        type: DataTypes.STRING      // tech used at frontend
    },
    backendTech: {
        type: DataTypes.STRING      // tech used at backend
    },
    companyId: {
        type: DataTypes.UUIDV4,     // company
        validate: {
            isUUID: 4
        }
    },
    siteURL: {
        type: DataTypes.STRING      // site url of project deployed
    },
    thumbnailURL: {
        type: DataTypes.STRING      // thumbnail url of the project
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

module.exports = Project;