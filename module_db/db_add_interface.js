// const express = require('express');
// const router = express.Router();

const db = require('./mongodb/dbaddfunction.js');
const cf = require('../common_func.js');
const CClip = require('../classes/clip-class.js');

function addClipToDatabase (req, res, next) {
    cf.log_msg('db:: add_clip_to_db');
    let oClip = req.oClip;
    
    db.addClip(oClip)
    .then( result => {
        req.db_status = 1;
        cf.log_msg('db:: Clip saved successfully');
        next();
    })
    .catch( error => {
        req.db_status = 0;
        cf.log_msg('db:: Clip could not be saved');
        next();
    });

    cf.log_msg('done with db_interface');
    
}

module.exports.addClipToDB = addClipToDatabase;