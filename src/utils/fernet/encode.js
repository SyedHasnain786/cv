require('dotenv').config();
const fernet = require('fernet');
const secret = new fernet.Secret(process.env.FERNET_SECRET);

exports.tokenEncoder = function(jwtToken) {
    const token = new fernet.Token({
        secret: secret,
        time: Date.parse(1),
        iv: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    });
    return token.encode(jwtToken);
}