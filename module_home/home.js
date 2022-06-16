const Express = require('express');
const router = Express.Router();
const cf = require('../common_func.js');

router.post('/getData', (req, res, next) => {
    cf.log_msg("reached home page");
    res.status(200).json({
        msg: 'Got response from home',
        clips: [
            { id: 1, recent5clips: 'Snow33', tag15clips: 'Jon', tag25clips: '35', uid: "3232" },
            { id: 2, recent5clips: 'Lannister33', tag15clips: 'Cersei', tag25clips: '42', uid: "3232"},
            { id: 3, recent5clips: 'Lannister33', tag15clips: 'Jaime', tag25clips: '45', uid: "3232"}
        ]
    });
    next();
});

module.exports = router;