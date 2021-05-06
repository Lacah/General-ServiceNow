var ListUtil = Class.create();
ListUtil.prototype = {

       initialize: function(list) {

               this.debug = gs.getProperty('debug.ListUtil') == 'true';

               if (JSUtil.notNil(list)) {
                       this._list = list.split(',');
               } else {
                       this._list = [];
               }
       },

/*
 * isInList - check if an id is in the list
 *
 * @param id - sys_id to look for
 * @return - boolean
 * @uses - this._list
 *
 */
       isInList : function(id) {

               var i = this._getIndex(id);

               this._debug('isInList(' + i + '): looking for ' + id + ' in ' + this.getList());
               return (i > -1);
       },

/*
 * addToList - add an id to the list
 *
 * @param id - sys_id of the id to add
 * @return - NA
 * @uses - this._list
 *
 */
       addToList : function(id) {

               if (!this.isInList(id))
                       this._list.push(id);
       },
/*
 * removeFromList - remove a id from the list
 *
 * @param id - sys_id to remove
 * @return - NA
 * @uses - this._list
 *
 */
       removeFromList : function(id) {

               var index = this._getIndex(id);

               if (index > -1)
                       this._list.splice(index, 1);
       },

/*
 * getList - display the list as CSV
 *
 * @param - NA
 * @return - string of CSV
 * @uses - this._list
 *
 */
       getList : function() {

               return this._list.join(',');
       },

/*
 * _getIndex - return the index of an element in list
 *
 * @param id - id to look for
 * @return - position of id in list (0..n/-1 = not found)
 * @uses - this._list
 *
 */
       _getIndex : function(id) {

               for (var i = 0; i < this._list.length; i++) {

                       if (this._list[i] == id)
                               return i;
               }

               return -1;
       },

/*
 * _debug - print a message to the debug log
 *
 * @param s - string to print
 * @return - NA
 * @usrs - this._debug
 *
 */
       _debug : function(s) {

               if (this.debug)
                       gs.print('>>>DEBUG: ListUtil: ' + s);
       },

       type: 'ListUtil'
}
