var CheckCriteria = Class.create();
CheckCriteria.prototype = {
    initialize: function() {},

    itemCriteria: function(item, adminOverride, userToCheck) {		

		var userObj = !gs.nil(userToCheck) ? gs.getUser().getUserByID(userToCheck) : gs.getUser(); // Non-binary variable for the user
		var userId = !gs.nil(userToCheck) ? userToCheck : gs.getUserID();

		// Admin override
		if(adminOverride != false && userObj.hasRole('admin')) {
			return true;
		}

        if (gs.nil(item)) {
            gs.error('CheckCriteria().itemCriteria() SI failed: item parameter is missing or nil, item: ' + item);
            return;
        }

        var availableForUC = this.getUserCritria(item, true);
        var notAvailableForUC = this.getUserCritria(item, false);

        if(sn_uc.UserCriteriaLoader.userMatches(userId, notAvailableForUC)) {
			return false;
		} else if (sn_uc.UserCriteriaLoader.userMatches(userId, availableForUC)) {
			return true;
		} else {
			return false;
		}

    },

    getUserCritria: function(item, available) {
        if (gs.nil(item)) {
            gs.error('CheckCriteria().getUserCritria() SI failed: item parameter is missing or nil, item: ' + item);
            return;
        }
        var returnArr = [];
        var tableToCheck = available == false ? 'sc_cat_item_user_criteria_no_mtom' : 'sc_cat_item_user_criteria_mtom';

        var ucCheckGr = new GlideRecord(tableToCheck);
        ucCheckGr.addQuery('sc_cat_item', item);
        ucCheckGr.query();
        while (ucCheckGr.next()) {
            returnArr.push(ucCheckGr.getValue('user_criteria'));
        }
        return returnArr;
    },

    type: 'CheckCriteria'
};
