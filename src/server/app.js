var koa = require('koa');
var path = require('path');
var router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var send = require('koa-send');
var serve = require('koa-static-folder');
var app = koa();

app.use(bodyParser());
app.use(router(app));

module.exports = app;

require('./routes');

/*** serving bundled js ***/
app.use(function *(){
  yield send(this, path.normalize(__dirname + '/../../dist/js/main.js'));
});

/*** serving bundled css ***/
app.use(function *(){
  yield send(this, path.normalize(__dirname + '/../../dist/css/main.css'));
});

/*** serving index.html client side ***/
app.get('/', function *() {
	yield send(this, path.normalize(__dirname + '/../../dist/index.html'));
});

app.listen(1337);