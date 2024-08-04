const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const { v4 } = require("is-uuid");

const ClientReview = sequelize.define('clientReview', {
    id: {
        type: DataTypes.UUIDV4,     // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    clientName: {
        type: DataTypes.STRING      // client name
    },
    companyId: {
        type: DataTypes.UUIDV4,     // company or organization details
        validate: {
            isUUID: 4
        }
    },
    rating: {
        type: DataTypes.INTEGER,        // client rating 
        defaultValue: 0,
        validate: {
            isInt: true 
        }
    },
    ratingOutOff: {
        type: DataTypes.INTEGER,        // rating out off
        defaultValue: 0,
        validate: {
            isInt: true,
        }
    },
    review: {
        type: DataTypes.TEXT,       // review of the client
    },
    userId: {
        type: DataTypes.UUIDV4,     // user
        validate: {
            isUUID: 4
        }
    },
    projectId :{
        type: DataTypes.UUIDV4,     // project 
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

module.exports = ClientReview;