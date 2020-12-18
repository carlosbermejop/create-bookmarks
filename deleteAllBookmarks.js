var gr1 = new GlideRecord('sys_ui_bookmark');
gr1.deleteMultiple();

var gr2 = new GlideRecord('sys_ui_bookmark_group');
gr2.deleteMultiple();