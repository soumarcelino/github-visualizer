var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var client_id = "bts5feeef2f5sa5e";
var cors = require('cors')
var axios = require('axios')

var client_id = ""
var client_secret = ""
var state = "123"
var redirect_uri = "http://localhost:3000/return-authorize"

app.use(cors())
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
 extended: true
})); 

const Sequelize = require('sequelize');
const sequelize = new Sequelize('api', 'root', '9151', {
 host: 'localhost',
 dialect: 'mysql',

 pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
 },

});

app.post('/getClientId', function (req, res) {
 let data = { 
    ip: req.connection.remoteAddress,
    state : generateHash(),
    status : 'received',
    client_id : client_id
 }

 sequelize.query(`INSERT INTO api.logs (created_at,ip,state,status) VALUES (now(), '${data.ip}', '${data.state}', '${data.status}');`).spread((results, metadata) => {
    res.json(data);
 })

});


app.post('/getToken', function (req, res) {
    axios.post('https://github.com/login/oauth/access_token', {
        client_id : client_id,
        client_secret : client_secret,
        code : req.body.code,
        redirect_uri : redirect_uri,
        state : req.body.state
      })
      .then(function (response) {
        res.send(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        res.send(error);
        console.log(error)
    });
   
});

app.listen(8080, function () {
 console.log('Example app listening on port 8080');
});

let generateHash = () => {
 return Math.random().toString(36).substr(2, 9);
}
