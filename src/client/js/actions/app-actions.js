var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    addItem:function(data){
    		//Check out /stores/data-store, whenever you call this addItem function from a component (or store), a 'payload' gets dispatched, which your stores are listening for.
    		//
    		// /stores/data-store: line
    		//
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            data:data
        })
    }
};

module.exports = AppActions;
