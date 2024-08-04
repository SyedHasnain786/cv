const express = require('express');
const router = express.Router();


// Default Route
router.get("/", (req, res) => {
    return res.send({status : 200, message : `Default Route.`});
});

router.get("*", (req, res) => {
    return res.status(404).json({
        status : false,
        message : "The page you are looking for does not exists."
    })
});

module.exports = router;