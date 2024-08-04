const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");

const Journey = sequelize.define('journey', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    empId: {
        type: DataTypes.STRING      // emp id of the company
    },
    startDate: {
        type: DataTypes.DATE        // joining date of company
    },
    endDate: {
        type: DataTypes.DATE        // last day at company
    },
    designation: {
        type: DataTypes.STRING,     // designation given
    },
    workDescription: {
        type: DataTypes.TEXT,       // work description
    },
    isCurrentCompany: {
        type: DataTypes.BOOLEAN     // identifies current company
    },
    companyId: {
        type: DataTypes.UUIDV4,     // company
        validate: {
            isUUID: 4
        }
    },
    address: {
        type: DataTypes.STRING      // office address
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

module.exports = Journey;