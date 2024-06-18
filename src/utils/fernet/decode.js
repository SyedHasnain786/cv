require('dotenv').config();
const fernet = require("fernet");
const { logger } = require('../winston.logger');
const secret = new fernet.Secret(process.env.FERNET_SECRET);

exports.tokenDecoder = function(token) {
    try {
        const decodeToken = new fernet.Token({
            secret: secret,
            token: token,
            ttl: 0
        });
        const decodedToken = decodeToken.decode();
        if(!decodedToken || decodedToken.error) {
            return null;
        }
        return decodedToken;
    } catch(err) {
        logger.warn(`Invalid Token - > `, err);
    }
}