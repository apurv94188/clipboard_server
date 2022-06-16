const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaClips = new Schema ({
    name: {type: String},
    data: {type: String, required: true},
    ver: {type: String},
    dateCreated: {type: Date},
    dateModified: {type: Date},
    tag: [String],
    user_id: {type: Number}
});

module.exports.clips = SchemaClips;