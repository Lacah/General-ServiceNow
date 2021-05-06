// Copy attachment from KBA
GlideSysAttachment.copy('kb_knowledge','61d05fd7db9ae450f4db16d15b96190d ','sys_properties','3458de2aff7102007729ffffffffff7c'); // glide.product.image.light
GlideSysAttachment.copy('kb_knowledge','61d05fd7db9ae450f4db16d15b96190d ','sys_properties','71e1b8dac0a8016a01ea6a1ca634c46d'); // glide.product.image

// Get attachment sys_ids
var lightIMG = new GlideRecord('sys_attachment');
lightIMG.addQuery('table_sys_id','3458de2aff7102007729ffffffffff7c');
lightIMG.setLimit(1);
lightIMG.query();
var lightIMGID = '';
while(lightIMG.next()){
lightIMGID = lightIMG.sys_id;
}

var IMG = new GlideRecord('sys_attachment');
IMG.addQuery('table_sys_id','71e1b8dac0a8016a01ea6a1ca634c46d ');
IMG.setLimit(1);
IMG.query();
var IMGID = '';
while(IMG.next()){
IMGID = IMG.sys_id;
}

// set attachment sys_id in respective properties
var propLightIMG = new GlideRecord('sys_properties');
propLightIMG.get('3458de2aff7102007729ffffffffff7c');
propLightIMG.setValue('value',lightIMGID + '.iix');
propLightIMG.update();

var propIMG = new GlideRecord('sys_properties');
propIMG.get('71e1b8dac0a8016a01ea6a1ca634c46d');
propIMG.setValue('value',IMGID + '.iix');
propIMG.update();
