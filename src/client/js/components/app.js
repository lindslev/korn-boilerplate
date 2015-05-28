/** @jsx React.DOM */
var React = require('react');
var List = require('./list');
var Form = require('./form');
var $ = require('jquery');


var DataStore = require('../stores/data-store');

var AppActions = require('../actions/app-actions');

function getData() {
    return {
        data: DataStore.getData()
    }
}

var APP =
    React.createClass({
        getInitialState: function() {
        		//Executed once, pulling the array directly from the DataStore.
            return getData();
        },
        _onChange: function() {
        		//Requery the store every change.
            this.setState(getData());
        },
        componentWillMount: function() {
        		//Having merged DataStore with the BaseStore, we can start listening to events emitted.
        		//
        		//When the store emits an event, we re-run the function to get its latest data and propogate down to List.
            DataStore.addChangeListener(this._onChange);
        },
        handleForm:function(author,text){
    		//This function was essentially called from our child component via the 'handleForm' prop, and we can use its passed data to modify the store.
    		//
    		//app-actions --> app-dispatcher --> data-store --> back to our on change listener.
    		AppActions.addItem({
    			author:author,
    			text:text
    		})
        },
        talkToServer:function() {
            $.ajax('http://localhost:1337/api/thing/thingOne')
                .done(function(res) {
                    console.log('Response: ', res);
                    alert('Check your console for the server\'s response!');
                })
        },
        render: function() {
            return (
                    <div>
                        <button onClick={this.talkToServer}> hit your server-side thingOne route! </button>
            			<List data={this.state.data} />
                	   <Form handleForm={this.handleForm} />
                    </div>
                )

        }
    });

module.exports = APP;
