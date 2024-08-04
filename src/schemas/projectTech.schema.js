const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const ProjectTech = sequelize.define('projectTech', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    projectId: {
        type: DataTypes.UUIDV4,     // project
        validate: {
            isUUID: 4
        }
    },
    techId: {
        type: DataTypes.UUIDV4,     // tech
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

module.exports = ProjectTech;