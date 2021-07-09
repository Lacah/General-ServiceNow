var srcFav = ""; // sys_id of the favourite to copy, from sys_ui_bookmark table
var userCriteria = ""; // encoded query of users from sys_user table

var fav = new GlideRecord('sys_ui_bookmark');
fav.get(srcFav);

var users = new GlideRecord('sys_user');
users.addEncodedQuery(userCriteria);
users.setLimit(3);
users.query();
while(users.next()) {
  var newFav = new GlideRecord('sys_ui_bookmark');
  newFav.initialize();
  newFav.setValue('color',fav.color);
  newFav.setValue('icon',fav.icon);
  newFav.setValue('order',999999999); //this might need to be changed per individual requirements
  newFav.setValue('pinned',true);
  newFav.setValue('title',fav.title);
  newFav.setValue('url',fav.url);
  newFav.setValue('user',users.sys_id);
  newFav.insert();
}
