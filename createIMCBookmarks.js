function createIMCBookmarks () {

    const imcAppSysId = "ddfce7864fd44300bfef0ab18110c7d7";
    
    var imcAdminUsers = new GlideRecord("sys_user_has_role");
    imcAdminUsers.addQuery("role","2831a114c611228501d4ea6c309d626d");
    imcAdminUsers.query();

    var imcManagerUser = new GlideRecord("sys_user");
    imcManagerUser.addQuery("user_name", "imc.manager");
    imcManagerUser.query();
    imcManagerUser.next();
    createManagerUserBookmarks(imcManagerUser.sys_id);

    var imcRemediatorUser = new GlideRecord("sys_user");
    imcRemediatorUser.addQuery("user_name", "imc.remediator");
    imcRemediatorUser.query();
    imcRemediatorUser.next();
    createRemediationUserBookmarks(imcRemediatorUser.sys_id);

    var imcViewerUser = new GlideRecord("sys_user");
    imcViewerUser.addQuery("user_name", "imc.viewer");
    imcViewerUser.query();
    imcViewerUser.next();
    createViewerUserBookmarks(imcViewerUser.sys_id);
    

    var imcDisableOpenInFinderUser = new GlideRecord("sys_user");
    imcDisableOpenInFinderUser.addQuery("user_name", "imc.disable_open_in_finder");
    imcDisableOpenInFinderUser.query();
    imcDisableOpenInFinderUser.next();
    createIMCDisableOpenInFinderUserBookmarks(imcDisableOpenInFinderUser.sys_id);


    while (imcAdminUsers.next()) {
        createNexthinkIMCBookmarkGroup(imcAdminUsers.user.sys_id, imcAppSysId);
        createScheduledJobsBookmark(imcAdminUsers.user.sys_id);
        createBusinessRulesBookmark(imcAdminUsers.user.sys_id);
        createSettingsSeparator(imcAdminUsers.user.sys_id);
        createScoreDefinitionsBookmark(imcAdminUsers.user.sys_id);
        createDevicePropertiesBookmark(imcAdminUsers.user.sys_id);
        createDeviceTablesBookmark(imcAdminUsers.user.sys_id);
        createScoreQueryBookmark(imcAdminUsers.user.sys_id);
        createPortalsBookmark(imcAdminUsers.user.sys_id);
        createEnginesBookmark(imcAdminUsers.user.sys_id);
        createPropertiesBookmark(imcAdminUsers.user.sys_id);
        createScriptsSeparator(imcAdminUsers.user.sys_id);
        createSetupScriptsBookmark(imcAdminUsers.user.sys_id);
        createScriptIncludesClassesBookmark(imcAdminUsers.user.sys_id);
        createScriptIncludesFunctionsBookmark(imcAdminUsers.user.sys_id);
        createClientScriptsBookmark(imcAdminUsers.user.sys_id);
        createUIScriptsBookmark(imcAdminUsers.user.sys_id);
        createUIActionsBookmark(imcAdminUsers.user.sys_id);
        createSupportSeparator(imcAdminUsers.user.sys_id);
        createContactSupportBookmark(imcAdminUsers.user.sys_id);
        createIncidentFormBookmark(imcAdminUsers.user.sys_id);
        createOpenIncidentBookmark(imcAdminUsers.user.sys_id);
        
        createCIBookmarkGroup(imcAdminUsers.user.sys_id, imcAppSysId);
        createCIUsersBookmark(imcAdminUsers.user.sys_id);
        createCIServicesBookmark(imcAdminUsers.user.sys_id);
        createCIComputersBookmark(imcAdminUsers.user.sys_id);
        createCISoftwarePackagesBookmark(imcAdminUsers.user.sys_id);
        createCIWindowsServerBookmark(imcAdminUsers.user.sys_id);

        createAgentWorkspaceBookmark(imcAdminUsers.user.sys_id);
        createApplicationLogsBookmark(imcAdminUsers.user.sys_id);
        createOutboundHTTPRequestsBookmark(imcAdminUsers.user.sys_id);
        createScriptsBackgroundBookmark(imcAdminUsers.user.sys_id);
        createMIDServerBookmark(imcAdminUsers.user.sys_id);
    }

    function createManagerUserBookmarks (userSysId) {
        createNexthinkIMCBookmarkGroup(userSysId, imcAppSysId);
        createScheduledJobsBookmark(userSysId);
        createBusinessRulesBookmark(userSysId);
        createSettingsSeparator(userSysId);
        createScoreDefinitionsBookmark(userSysId);
        createDevicePropertiesBookmark(userSysId);
        createDeviceTablesBookmark(userSysId);
        createScoreQueryBookmark(userSysId);
        createPortalsBookmark(userSysId);
        createEnginesBookmark(userSysId);
        createPropertiesBookmark(userSysId);
        createScriptsSeparator(userSysId);
        createSetupScriptsBookmark(userSysId);
        createScriptIncludesClassesBookmark(userSysId);
        createScriptIncludesFunctionsBookmark(userSysId);
        createClientScriptsBookmark(userSysId);
        createUIScriptsBookmark(userSysId);
        createUIActionsBookmark(userSysId);
        createSupportSeparator(userSysId);
        createContactSupportBookmark(userSysId);
        createIncidentFormBookmark(userSysId);
        createOpenIncidentBookmark(userSysId);
        
        createCIBookmarkGroup(userSysId, imcAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);

        createAgentWorkspaceBookmark(userSysId);
        createMIDServerBookmark(userSysId);
    }

    function createRemediationUserBookmarks (userSysId) {
        createNexthinkIMCBookmarkGroup(userSysId, imcAppSysId);
        createContactSupportBookmark(userSysId);
        createIncidentFormBookmark(userSysId);
        createOpenIncidentBookmark(userSysId);
        
        createCIBookmarkGroup(userSysId, imcAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);

        createAgentWorkspaceBookmark(userSysId);
        createMIDServerBookmark(userSysId);
    }

    function createViewerUserBookmarks (userSysId) {
        createNexthinkIMCBookmarkGroup(userSysId, imcAppSysId);
        createContactSupportBookmark(userSysId);
        createIncidentFormBookmark(userSysId);
        createOpenIncidentBookmark(userSysId);
        
        createCIBookmarkGroup(userSysId, imcAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);

        createAgentWorkspaceBookmark(userSysId);
        createMIDServerBookmark(userSysId);
    }

    function createIMCDisableOpenInFinderUserBookmarks (userSysId) {
        createNexthinkIMCBookmarkGroup(userSysId, imcAppSysId);
        createContactSupportBookmark(userSysId);
        createIncidentFormBookmark(userSysId);
        createOpenIncidentBookmark(userSysId);
        
        createCIBookmarkGroup(userSysId, imcAppSysId);
        createCIUsersBookmark(userSysId);
        createCIServicesBookmark(userSysId);
        createCIComputersBookmark(userSysId);
        createCISoftwarePackagesBookmark(userSysId);
        createCIWindowsServerBookmark(userSysId);

        createAgentWorkspaceBookmark(userSysId);
        createMIDServerBookmark(userSysId);
    }
}

function createIncidentFormBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Incident - Create New");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "Incident - Create New";
        gr.url = "incident.do";
        gr.color = "red";
        gr.icon = "view";
        gr.order = 1;
        gr.insert();
    }
}

function createOpenIncidentBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Incident - Open");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "Incident - Open";
        gr.url = "incident_list.do";
        gr.color = "red";
        gr.icon = "view";
        gr.order = 2;
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

function createNexthinkIMCBookmarkGroup (user, app) {
    var gr = new GlideRecord("sys_ui_bookmark_group");
    gr.addQuery("user", user);
    gr.addQuery("title", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {
        gr.color = "green";
        gr.title = "Nexthink Incident Management Connector";
        gr.user = user;
        gr.application = app;
        gr.order = 1;
        gr.insert();
    }
}

function createScheduledJobsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Scheduled Jobs");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scheduled Jobs";
        gr.url = "sysauto_list.do?sysparm_userpref_module=89e574160f110300bd9d45ace1050e58&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5Ename%3DDiscover+Engines+-+Devices%5EEQ";
        gr.icon = "list";
        gr.color = "green";
        gr.order = 1;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createBusinessRulesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Business Rules");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Business Rules";
        gr.url = "sys_script_list.do?sysparm_userpref_module=1868e3ac4f7c03007bc83879b110c715&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 2;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createSettingsSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Settings");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Settings";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.order = 3;
        gr.insert();
    }
}

function createScoreDefinitionsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Score Definitions");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Score Definitions";
        gr.url = "x_nexsa_imc_score_definition_list.do?sysparm_userpref_module=b22e001e4f184300bfef0ab18110c7c3";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 4;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createDevicePropertiesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Device Properties");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Device Properties";
        gr.url = "x_nexsa_imc_score_header_list.do?sysparm_userpref_module=162d27c64fd44300bfef0ab18110c7cc";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 5;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createDeviceTablesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Device Tables");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Device Tables";
        gr.url = "x_nexsa_imc_device_table_list.do?sysparm_userpref_module=283ec94b0fb10300bd9d45ace1050eb3";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 6;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createScoreQueryBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Score Query");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Score Query";
        gr.url = "x_nexsa_imc_score_query_list.do?sysparm_userpref_module=b5e233ca4fd44300bfef0ab18110c783";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 7;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createPortalsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Portals");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Portals";
        gr.url = "x_nexsa_imc_endpoint_list.do?sysparm_userpref_module=a097ab0a4fe103007bc83879b110c755&sysparm_query=type%3Dportal%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 8;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createEnginesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Engines");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Engines";
        gr.url = "x_nexsa_imc_endpoint_list.do?sysparm_userpref_module=09d137024f500300635a01f18110c73c&sysparm_query=type%3Dengine%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 9;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createPropertiesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Properties");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Properties";
        gr.url = "system_properties_ui.do?sysparm_title=Nexthink%20Incident%20Management%20Connector%20Properties&sysparm_category=NIMC%20Properties%20Category,NIMC%20Mapping%20Properties%20Category";
        gr.color = "green";
        gr.icon = "view";
        gr.order = 10;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createScriptsSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Scripts");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scripts";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.order = 11;
        gr.insert();
    }
}

function createSetupScriptsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Setup Scripts");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Setup Scripts";
        gr.url = "sysauto_script_list.do?sysparm_userpref_module=a9de4ac44f600300bfef0ab18110c704&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5Ename%3DDefault+Configuration+Setup%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 12;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createScriptIncludesClassesBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Script Includes Classes");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Script Includes Classes";
        gr.url = "sys_script_include_list.do?sysparm_userpref_module=075f8ec44f600300bfef0ab18110c7e3&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EdescriptionSTARTSWITHClass%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 13;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createScriptIncludesFunctionsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Script Includes Functions");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Script Includes Functions";
        gr.url = "sys_script_include_list.do?sysparm_userpref_module=4c30d6084f600300bfef0ab18110c7fb&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EdescriptionSTARTSWITHFunction%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 14;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createClientScriptsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Client Scripts");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Client Scripts";
        gr.url = "sys_script_client_list.do?sysparm_userpref_module=ebc8a7ac4f7c03007bc83879b110c7d5&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 15;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createUIScriptsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","UI Scripts");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "UI Scripts";
        gr.url = "sys_ui_script_list.do?sysparm_userpref_module=306d764c0fb10300bd9d45ace1050e01&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 16;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createUIActionsBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","UI Actions");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "UI Actions";
        gr.url = "sys_ui_action_list.do?sysparm_userpref_module=7f7faf2a4ff103007bc83879b110c7f2&sysparm_query=sys_scope%3D69061e71db1cc30086483ecf9d961937%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.order = 17;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.insert();
    }
}

function createSupportSeparator (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Support");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Support";
        gr.pinned = true;
        gr.icon = "icon-view color-green";
        gr.separator = true;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
        gr.order = 18;
        gr.insert();
    }
}

function createContactSupportBookmark (user) {
    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Contact Support");
    gr.addQuery("group", "Nexthink Incident Management Connector");
    gr.query();

    if (!gr.next()) {

        var nexthinkIMCBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkIMCBookmarkGroups.addQuery("user", user);
        nexthinkIMCBookmarkGroups.addQuery("title", "Nexthink Incident Management Connector");
        nexthinkIMCBookmarkGroups.query();
        nexthinkIMCBookmarkGroups.next();

        gr.user = user;
        gr.title = "Contact Support";
        gr.url = "x_nexsa_imc_nexthink_contact_support.do";
        gr.color = "green";
        gr.icon = "view";
        gr.order = 19;
        gr.group = nexthinkIMCBookmarkGroups.sys_id;
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

function createAgentWorkspaceBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","Agent Workspace - Agent Workspace Home ➚");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "Agent Workspace - Agent Workspace Home ➚";
        gr.url = "/workspace";
        gr.color = "cyan";
        gr.icon = "view";
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
        gr.order = 8;
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
        gr.order = 9;
        gr.insert();
    }
}

createIMCBookmarks();