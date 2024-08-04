const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Contributor = sequelize.define('contributor', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {
        type: DataTypes.STRING      // name of the contributor
    },
    email: {
        type: DataTypes.STRING,     // email of the contributor
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,     // number of the contributor
    },
    openSourceId: {
        type: DataTypes.UUIDV4,     // open source project id
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

module.exports = Contributor;