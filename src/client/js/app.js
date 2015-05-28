/** @jsx React.DOM */
var React = require('react');
var APP = require('./components/app');

//Shove the APP component straight into a div we hardcoded into the html file.
React.render(
    <APP />,
    document.getElementById('main')
)