const express = require('express');
const { copyFile } = require('fs');
const router = express.Router();
const cf = require('../common_func.js');
const db = require('../module_db/db_add_interface.js');

const class_clip = require('../classes/clip-class.js');
const CClip = class_clip.CClip;

// expected json obj:
// clip_name, clip_data
function clipDataToCClipObj (req, res, next) {
    cf.log_msg('addClip - midlayer - addreq_to_json_obj');
    for (k in req.body){
        cf.log_msg(k);
    }
    cf.log_msg(req.body.clip_name);
    var oClip = new CClip();
    oClip.m_sName = req.body.clip_name;
    oClip.m_sDescription = req.body.clip_data;
    oClip.m_dateCreated = Date.now();
    oClip.m_dateModified = Date.now();
    

    req.oClip = oClip;
    next();
}

// add clip
router.post('/addNewClip', clipDataToCClipObj, db.addClipToDB, (req, res, next) => {
    cf.log_msg('addClip router from modify_clip');
    if (req.db_status == 1) {
        cf.log_msg("add clip saved successfully");
        res.status(200).json({
            msg: 'Clip Saved Successfully',
            saved_clip_name: req.saved_clip.name
        });
    } else {
        cf.log_msg("add clip saved successfully");
        res.status(500).json({
            msg: 'Clip could not be saved'
        });
    }
});


module.exports = router;


// modify clip

// delete clip
