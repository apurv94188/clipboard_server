
function get_time_stamp_now() {
    var curr_time_stamp = Date.now();
    var date_obj = new Date(curr_time_stamp);
    var date = date_obj.getDate();
    var month = date_obj.getMonth() + 1;
    var year = date_obj.getFullYear();
    var hours = date_obj.getHours();
    var minutes = date_obj.getMinutes();
    var seconds = date_obj.getSeconds();

    // prints date & time in YYYY-MM-DD format
    return hours+"::"+minutes+"::"+seconds+" " + date + "-" + month + "-" + year;
}

function log_msg(msg) {
    switch (arguments.length){
        case 1:
            console.log(get_time_stamp_now() + ' || ' + msg);
            break;
        case 2:
            console.log(get_time_stamp_now() + arguments[0] + ' || ' + arguments[1]);
            break;
        case 3:
            console.log(get_time_stamp_now() + ' ' + arguments[0] + ' ' + arguments[1] + ' || ' + arguments[2]);
            break;
    }
    
}


module.exports.log_msg = log_msg;