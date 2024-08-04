require("dotenv").config();
const fileName = "Auth Controller";
const { successHandler, errorHandler } = require("../constants/message.constant");
const { logger } = require("../helpers/winston");
const { adminLogin } = require("../services/auth.service");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {}
 * @use 'Login for Admin'
 */
exports.adminLogin = async function(req, res) {
    try {
        const argObj = {};
        const resp = await adminLogin(argObj);
        return res.status(resp.status || 200).json(resp);
    } catch(err) {
        logger.error({ message : `Error in ${fileName} `, Error : err });
        return res.status(500).json({ status: 500, message: errorHandler.somethingWentWrong });
    }
}

