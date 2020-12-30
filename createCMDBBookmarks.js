function createCMDBBookmarks () {

    var cmdbAppSysId = "ef70417a4fd43200c5d77d2ca310c717";

    var cmdbAdminUsers = new GlideRecord("sys_user_has_role");
    cmdbAdminUsers.addQuery("role","2831a114c611228501d4ea6c309d626d");
    cmdbAdminUsers.query();

    var cmdbManagerUser = new GlideRecord("sys_user");
    cmdbManagerUser.addQuery("user_name", "cmdb.manager");
    cmdbManagerUser.query();
    cmdbManagerUser.next();
    createManagerUserBookmarks(cmdbManagerUser.sys_id);

    var cmdbStatsViewerUser = new GlideRecord("sys_user");
    cmdbStatsViewerUser.addQuery("user_name", "cmdb.stats_viewer");
    cmdbStatsViewerUser.query();
    cmdbStatsViewerUser.next();
    createStatsViewerUserBookmarks(cmdbStatsViewerUser.sys_id);

    while (cmdbAdminUsers.next()) {
        createNexthinkCMDBBookmarkGroup(cmdbAdminUsers.user.sys_id, cmdbAppSysId);
        createScheduledScriptsBookmark(cmdbAdminUsers.user.sys_id);
        createScheduledImportsBookmark(cmdbAdminUsers.user.sys_id);
        createImportSetsBookmark(cmdbAdminUsers.user.sys_id);
        createDataSourcesBookmark(cmdbAdminUsers.user.sys_id);
        createEventsBookmark(cmdbAdminUsers.user.sys_id);
        createBusinessRulesBookmark(cmdbAdminUsers.user.sys_id);
        createSettingsSeparator(cmdbAdminUsers.user.sys_id);
        createCITypesBookmark(cmdbAdminUsers.user.sys_id);
        createCITypeFieldsBookmark(cmdbAdminUsers.user.sys_id);
        createCIRelationshipsBookmark(cmdbAdminUsers.user.sys_id);
        createEnginesBookmark(cmdbAdminUsers.user.sys_id);
        createPropertiesBookmark(cmdbAdminUsers.user.sys_id);
        createScriptsSeparator(cmdbAdminUsers.user.sys_id);
        createSetupScriptsBookmark(cmdbAdminUsers.user.sys_id);
        createSetupIncludesClassesBookmark(cmdbAdminUsers.user.sys_id);
        createSetupIncludesFunctionsBookmark(cmdbAdminUsers.user.sys_id);
        createScriptActionsBookmark(cmdbAdminUsers.user.sys_id);
        createSupportSeparator(cmdbAdminUsers.user.sys_id);
        createContactSupportBookmark(cmdbAdminUsers.user.sys_id);
        createStatsBookmark(cmdbAdminUsers.user.sys_id);
        createReferencesBookmark(cmdbAdminUsers.user.sys_id);

        createCIBookmarkGroup(cmdbAdminUsers.user.sys_id, cmdbAppSysId)
        createCIUsersBookmark(cmdbAdminUsers.user.sys_id);
        createCIServicesBookmark(cmdbAdminUsers.user.sys_id);
        createCIComputersBookmark(cmdbAdminUsers.user.sys_id);
        createCISoftwarePackagesBookmark(cmdbAdminUsers.user.sys_id);
        createCIWindowsServerBookmark(cmdbAdminUsers.user.sys_id);

        createApplicationLogsBookmark(cmdbAdminUsers.user.sys_id);
        createOutboundHTTPRequestsBookmark(cmdbAdminUsers.user.sys_id);
        createCIClassManagerBookmark(cmdbAdminUsers.user.sys_id);
        createScriptsBackgroundBookmark(cmdbAdminUsers.user.sys_id);
        createMIDServerBookmark(cmdbAdminUsers.user.sys_id);
    }

    function createManagerUserBookmarks (userSysId) {
        createNexthinkCMDBBookmarkGroup(userSysId, cmdbAppSysId);
        createScheduledScriptsBookmark(userSysId);
        createScheduledImportsBookmark(userSysId);
        createImportSetsBookmark(userSysId);
        createBusinessRulesBookmark(userSysId);
        createSettingsSeparator(userSysId);
        createCITypesBookmark(userSysId);
        createCITypeFieldsBookmark(userSysId);
        createCIRelationshipsBookmark(userSysId);
        createEnginesBookmark(userSysId);
        createPropertiesBookmark(userSysId);
        createScriptsSeparator(userSysId);
        createSetupScriptsBookmark(userSysId);
        createSupportSeparator(userSysId);
        createContactSupportBookmark(userSysId);
        createStatsBookmark(userSysId);
        createReferencesBookmark(userSysId);

        createCIBookmarkGroup(userSysId, cmdbAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);
    }

        function createStatsViewerUserBookmarks(userSysId) {
        createNexthinkCMDBBookmarkGroup(userSysId, cmdbAppSysId);
        createSupportSeparator(userSysId);
        createContactSupportBookmark(userSysId);
        createStatsBookmark(userSysId);


        createCIBookmarkGroup(userSysId, cmdbAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);
    }
}

function createNexthinkCMDBBookmarkGroup (user, app) {
    var gr = new GlideRecord("sys_ui_bookmark_group");
    gr.addQuery("user", user);
    gr.addQuery("title", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {
        gr.color = "green";
        gr.title = "Nexthink CMDB Connector";
        gr.user = user;
        gr.application = app;
        gr.order = 1;
        gr.insert();
    }
}

function createCIBookmarkGroup (user, app) {
    var gr = new GlideRecord("sys_ui_bookmark_group");
    gr.addQuery("user", user);
    gr.addQuery("title", "Configuration Items");
    gr.query();

    if (!gr.next()) {
        gr.color = "blue";
        gr.title = "Configuration Items";
        gr.user = user;
        gr.application = app;
        gr.order = 3;
        gr.insert();
    }
}

function createScheduledScriptsBookmark (user) {
    
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Scheduled Scripts");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scheduled Scripts";
        gr.url = "sysauto_script_list.do?sysparm_userpref_module=76a1d4b00fa03200487065ba32050e6d&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EnameSTARTSWITHSI+Nexthink%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 1;
        gr.insert();
    }
}

function createScheduledImportsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Scheduled Imports");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scheduled Imports";
        gr.url = "scheduled_import_set_list.do?sysparm_userpref_module=442fd25d4f3932007bc83879b110c7d7&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 2;
        gr.insert();
    }
}

function createImportSetsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Import Sets");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Import Sets";
        gr.url = "sys_db_object_list.do?sysparm_userpref_module=c7760a3a4f9032007bc83879b110c714&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EnameSTARTSWITHx_nexsa_cmdb_pop_import_set%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 3;
        gr.insert();
    }
}

function createDataSourcesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Data Sources");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Data Sources";
        gr.url = "sys_data_source_list.do?sysparm_userpref_module=abac539f4f5832007bc83879b110c7fd&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 4;
        gr.insert();
    }
}

function createEventsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Events");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Events";
        gr.url = "sysevent_register_list.do?sysparm_userpref_module=9dd1ebed0fa0b200113db97ce1050e9d&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 5;
        gr.insert();
    }
}

function createBusinessRulesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Business Rules");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Business Rules";
        gr.url = "sys_script_list.do?sysparm_userpref_module=ea7a6f6f4f6c32007bc83879b110c751&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 6;
        gr.insert();
    }
}

function createSettingsSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Settings");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Settings";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 7;
        gr.insert();
    }
}

function createCITypesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","CI Types");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "CI Types";
        gr.url = "x_nexsa_cmdb_pop_ci_category_list.do?sysparm_userpref_module=f2e155fe4f1032007bc83879b110c762";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 8;
        gr.insert();
    }
}

function createCITypeFieldsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title", "CI Type Fields");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "CI Type Fields";
        gr.url = "x_nexsa_cmdb_pop_ci_category_field_list.do?sysparm_userpref_module=5b9519724f5032007bc83879b110c746";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 9;
        gr.insert();
    }
}

function createCIRelationshipsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","CI Relationships");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "CI Relationships";
        gr.url = "x_nexsa_cmdb_pop_ci_rel_list.do?sysparm_userpref_module=b5a185b74f3cb2007bc83879b110c73b";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 10;
        gr.insert();
    }
}

function createEnginesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Engines");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Engines";
        gr.url = "x_nexsa_cmdb_pop_engine_list.do?sysparm_userpref_module=232cc2830f503200487065ba32050ea0";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 11;
        gr.insert();
    }
}

function createPropertiesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Properties");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Properties";
        gr.url = "system_properties_ui.do?sysparm_title=Nexthink%20CMDB%20Connector%20Properties&sysparm_category=CMDB%20Properties%20Category,CMDB%20NXQL%20Properties%20Category,CMDB%20Platforms%20Properties%20Category";
        gr.color = "green";
        gr.icon = "view";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 12;
        gr.insert();
    }
}

function createScriptsSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Scripts");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scripts";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 13;
        gr.insert();
    }
}

function createSetupScriptsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Setup Scripts");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Setup Scripts";
        gr.url = "sysauto_script_list.do?sysparm_userpref_module=0ca4b1fe4f5032007bc83879b110c7eb&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5Ename%3DSettings+Tables+Setup%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 14;
        gr.insert();
    }
}

function createSetupIncludesClassesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Setup Includes Classes");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Setup Includes Classes";
        gr.url = "sysauto_script_list.do?sysparm_userpref_module=0ca4b1fe4f5032007bc83879b110c7eb&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5Ename%3DSettings+Tables+Setup%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 15;
        gr.insert();
    }
}

function createSetupIncludesFunctionsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Setup Includes Functions");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Setup Includes Functions";
        gr.url = "sys_script_include_list.do?sysparm_userpref_module=4eb9f01b4f2032007bc83879b110c7d3&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EdescriptionSTARTSWITHFunction%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 16;
        gr.insert();
    }
}

function createScriptActionsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Script Actions");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Script Actions";
        gr.url = "sysevent_script_action_list.do?sysparm_userpref_module=d134eb210fe0b200113db97ce1050e69&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 17;
        gr.insert();
    }
}

function createSupportSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Support");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Support";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 18;
        gr.insert();
    }
}

function createContactSupportBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Contact Support");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Contact Support";
        gr.url = "x_nexsa_cmdb_pop_nexthink_contact_support.do";
        gr.color = "green";
        gr.icon = "view";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 19;
        gr.insert();
    }
}

function createStatsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Stats");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "Stats";
        gr.url = "x_nexsa_cmdb_pop_stat_list.do?sysparm_userpref_module=578b7ff34fa472007bc83879b110c770";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 20;
        gr.insert();
    }
}

function createReferencesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","References");
    gr.addQuery("group", "Nexthink CMDB Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkCMDBBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCMDBBookmarkGroups.addQuery("user", user);
        nexthinkCMDBBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCMDBBookmarkGroups.query();
        nexthinkCMDBBookmarkGroups.next();

        gr.user = user;
        gr.title = "References";
        gr.url = "x_nexsa_cmdb_pop_reference_list.do?sysparm_userpref_module=3ee545e54ff832007bc83879b110c713";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCMDBBookmarkGroups.sys_id;
        gr.order = 20;
        gr.insert();
    }
}

function createCIUsersBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Users");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Configuration Items");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Users";
        gr.url = "/sys_user_list.do";
        gr.color = "yellow";
        gr.icon = "user";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 1;
        gr.insert();
    }
}

function createCIServicesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Services");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Configuration Items");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Services";
        gr.url = "/cmdb_ci_service_list.do";
        gr.color = "cyan";
        gr.icon = "view";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 2;
        gr.insert();
    }
}

function createCIComputersBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Computers");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Configuration Items");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Computers";
        gr.url = "/cmdb_ci_computer_list.do";
        gr.color = "blue";
        gr.icon = "mobile";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 3;
        gr.insert();
    }
}

function createCISoftwarePackagesBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Software Packages");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Configuration Items");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Software Packages";
        gr.url = "/cmdb_ci_spkg_list.do";
        gr.color = "pink";
        gr.icon = "book";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 4;
        gr.insert();
    }
}

function createCIWindowsServerBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Windows Server");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Configuration Items");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Windows Server";
        gr.url = "/cmdb_ci_win_server_list.do";
        gr.color = "aquamarine";
        gr.icon = "cards";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 5;
        gr.insert();
    }
}

function createApplicationLogsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","System Logs - Application Logs");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "System Logs - Application Logs";
        gr.url = "syslog_app_scope_list.do?sysparm_userpref_module=97ee0f02c30321007de15ad8cbba8f60&sysparm_query=sys_created_onONToday%40javascript:gs.daysAgoStart(0)%40javascript:gs.daysAgoEnd(0)%5EEQ&&sysparm_order=sys_created_on&sysparm_order_direction=desc";
        gr.color = "white";
        gr.icon = "list";
        gr.order = 6;
        gr.insert();
    }
}

function createOutboundHTTPRequestsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","System Logs - Outbound HTTP Requests");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "System Logs - Outbound HTTP Requests";
        gr.url = "sys_outbound_http_log_list.do?sysparm_userpref_module=a0ff7d7247331200f4b7d7527c9a714d&sysparm_query=sys_created_onONToday%40javascript:gs.daysAgoStart(0)%40javascript:gs.daysAgoEnd(0)%5EEQ&&sysparm_order=sys_created_on&sysparm_order_direction=desc";
        gr.color = "orange";
        gr.icon = "list";
        gr.order = 7;
        gr.insert();
    }
}

function createCIClassManagerBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","CI Class Manager");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "CI Class Manager";
        gr.url = "$ciModel.do";
        gr.color = "orange";
        gr.icon = "view";
        gr.order = 8;
        gr.insert();
    }
}

function createScriptsBackgroundBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","System Definition - Scripts - Background");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "System Definition - Scripts - Background";
        gr.url = "sys.scripts.do";
        gr.color = "yellow";
        gr.icon = "view";
        gr.order = 9;
        gr.insert();
    }
}

function createMIDServerBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","MID Server - Servers");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "MID Server - Servers";
        gr.url = "ecc_agent_list.do?sysparm_userpref_module=8d1807e9c611227d01dc4cd973ddf4ca";
        gr.color = "pink";
        gr.icon = "list";
        gr.order = 10;
        gr.insert();
    }
}

createCMDBBookmarks();