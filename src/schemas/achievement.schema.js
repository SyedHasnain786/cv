const { UUIDV4, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.config");
const User = require("./user.schema");
const Company = require("./company.schema");

const Achievement = sequelize.define('achievement', {
    id: {
        type: DataTypes.UUIDV4,      // unique id
        primaryKey: true,
        defaultValue: UUIDV4,
        validate: {
            isUUID: 4
        }
    },
    name: {     
        type: DataTypes.STRING,     // name of Achievement
    },
    slug: {
        type: DataTypes.STRING,     // lowercase value seperated with '_'
        validate: {
            isLowercase: true
        }
    },
    companyId: {
        type: DataTypes.UUIDV4,     // unique id of company 
        validate: {
            isUUID: 4
        }
    },
    userId: {
        type: DataTypes.UUIDV4,     //  the achiever
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

Achievement.belongsTo(User, {
    type: 'user',
    foreignKey: 'userId',
    targetKey: 'id'
});

Achievement.belongsTo(Company, {
    type: 'company',
    foreignKey: 'companyId',
    targetKey: 'id'
});

module.exports = Achievement;