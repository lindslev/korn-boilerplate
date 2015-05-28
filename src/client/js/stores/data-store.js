var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppConstants = require('../constants/app-constants');

var merge = require('react/lib/merge');
var BaseStore = require('./base-store');

var _ = require('lodash');

//Only initial data. Anything within a store file is mutable, and only exists to announce changes via an event emitter and update its data.

var _data = [
	{
		author:'Sam McCord',
		text: 'You cannot make a revolution with silk gloves'
	},
	{
		author:'Mr. Earl',
		text:'Do what you love.'
	}
];

var DataStore = merge(BaseStore,{

		// Your components listen for a change event, then run this method to ensure it has the hottest latest data.
    getData: function(){
        return _data;
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
    		//Check out /dispatchers/dispatcher.js for cool ish.
    		//
    		//This function is instantiated on spin-up, and executed everytime an 'app-action's payload is dispatched, which was initially triggerd from a component, like the form.
    		//
    		//See /actions/app-actions
    		///
    		//The switch statement dictates whether or not this file responds to it.
    		//
    		//If it does, it will emit an event to all components that care about its state, like /components/app.js
    		//
        var action = payload.action;

        switch(action.actionType){
            case AppConstants.ADD_ITEM:
            		//Modify the mutable data received from the payload.
            		_data.push(action.data);

    		        // Whatever components you've added a listener within will receive updated data, which will propogate down to child components.
    		        DataStore.emitChange();
                break;
        }

        return;
    })
});

module.exports = DataStore;
