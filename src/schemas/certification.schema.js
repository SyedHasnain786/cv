const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Certification = sequelize.define('certification', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    title: {
        type: DataTypes.STRING,     // title of certification
    },
    url: {
        type: DataTypes.STRING,     // certificate uploaded url
    },
    companyId: {
        type: DataTypes.UUIDV4,     // certification given by company
        validate: {
            isUUID: 4
        }
    },
    userId: {
        type: DataTypes.UUIDV4,     // certificate holder
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

module.exports = Certification;