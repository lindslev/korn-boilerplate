var app = require('./../../app');
var router = require('koa-router');

app.use(router(app));

var controller = require('./thing.controller');
var routePrefix = '/api/thing';


/** add routes here **/
app.get(routePrefix + '/', controller.index);
app.get(routePrefix + '/thingOne', controller.one);