var React = require('react');
var ListItem = require('./list-item');

var List = React.createClass({
    render:function(){
    		//Map is a powerful function in React. Utilized here to iterate over the array of inherited data from app.js, and generate JSX with its own props to pass down to the ListItem.

        var listItems = this.props.data.map(function(datum){
           return <ListItem datum={datum} />
        });

        return (
            <ul>
	            {listItems}
	          </ul>
        )
    }
});

module.exports = List;