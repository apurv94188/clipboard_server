class Clip {

    m_iId;  // unqiue integer identifier 
    m_sName;    // string
    m_sDescription; // string
    m_oDetail;  // CDetail class object
    m_sVer; // version of CDetail class
    m_dateCreated;  // date clip was created
    m_dateModified;     // date last modified
    m_arrTags;  // tags
    
    constructor () {
        // this.m_sName = clip_name;
    }

};


class Detail {
    m_sFileFullName;

};

module.exports.CClip = Clip;
module.exports.CDetail = Detail;