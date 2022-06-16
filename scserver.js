const cf = require('./common_func.js')

const http = require('http');
const port = process.env.PORT
cf.log_msg('DEBUG', 'port no. is ' + port)
const handle_request = require('./handle_client_request.js');
const sc_server = http.createServer(handle_request);

sc_server.listen(port);
