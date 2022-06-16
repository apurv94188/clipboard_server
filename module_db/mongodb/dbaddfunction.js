const Model = require('./dbmodel.js');
const Connection = require('./dbconnect.js');
const db_name = "dbClipper";
const cf = require('../../common_func.js');
const class_clip = require('../../classes/clip-class.js');
const CClip = class_clip.CClip;

function convertJsonToClipObj (clip_json_data) {
    let oClip = new CClip();
    oClip.m_sName = clip_json_data.name;
    oClip.m_sDescription = clip_json_data.data;
    return oClip;
}

function addNewClipToClipsDB (oClip) {
    cf.log_msg('mongodb:: add_clip');
    return new Promise ((resolve, reject) => {
        
        cf.log_msg(oClip.m_sName)
        const db_conn = Connection.fn_get_db_conn(db_name);
        let new_clip = new Model.Clips({
            name: oClip.m_sName,
            data: oClip.m_sDescription
        });
    
        new_clip.save()
        .then( result => {
            cf.log_msg('mongodb:: New Clip ' + result.m_sName + ' saved successfully');
            let oClip = convertJsonToClipObj(result);
            let response = {
                db_status: 1,
                oClip: oClip
            }
            //next();
            resolve(response)
            return
        })
        .catch( error => {
            cf.log_msg('mongodb:: Failed to add new clip ' + new_clip.name + ' to the db');
            response = {
                db_status: 0,
                msg: error
            };
            //next();
            reject(response);
            return
        });
    })
}


module.exports.addClip = addNewClipToClipsDB;