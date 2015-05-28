var React = require('react');

//Self explanatory, export an li element. Its data bubbles down whatever parent component gives it a datum attribute, in this case, list.js

var List = React.createClass({
    render:function(){
        return (
            <li>
	            <h3>{this.props.datum.author}</h3>
	            <p>{this.props.datum.text}</p>
	          </li>
        )
    }
});

module.exports = List;