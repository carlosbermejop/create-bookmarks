function createCMDBBookmarks () {

    var cmdbAppSysId = "ef70417a4fd43200c5d77d2ca310c717";

    var cmdbAdminUsers = new GlideRecord("sys_user_has_role");
    cmdbAdminUsers.addQuery("role","2831a114c611228501d4ea6c309d626d");
    cmdbAdminUsers.query();

    // var cmdbManagerUser = new GlideRecord("sys_user");
    // cmdbManagerUser.addQuery("user_name", "cmdb.manager");
    // cmdbManagerUser.query();
    // cmdbManagerUser.next();
    // createManagerUserBookmarks(cmdbManagerUser.sys_id);

    // var cmdbStatsViewerUser = new GlideRecord("sys_user");
    // cmdbStatsViewerUser.addQuery("user_name", "cmdb.manager");
    // cmdbStatsViewerUser.query();
    // cmdbStatsViewerUser.next();
    // createStatsViewerUserBookmarks(cmdbStatsViewerUser.sys_id);

    while (cmdbAdminUsers.next()) {
        createNexthinkCMDBBookmarkGroup(cmdbAdminUsers.user.sys_id, cmdbAppSysId);
        createScheduledScriptsBookmark(cmdbAdminUsers.user.sys_id);

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
        gr.order = 2;
        gr.insert();
    }
}

function createScheduledScriptsBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","My Work");
    gr.query();

    if (!gr.next()) {

        var nexthinkCIBookmarkGroups = new GlideRecord("sys_ui_bookmark_group");
        nexthinkCIBookmarkGroups.addQuery("user", user);
        nexthinkCIBookmarkGroups.addQuery("title", "Nexthink CMDB Connector");
        nexthinkCIBookmarkGroups.query();
        nexthinkCIBookmarkGroups.next();

        gr.user = user;
        gr.title = "Scheduled Scripts";
        gr.url = "/sysauto_script_list.do?sysparm_userpref_module=76a1d4b00fa03200487065ba32050e6d&sysparm_query=sys_scope%3Def70417a4fd43200c5d77d2ca310c717%5EnameSTARTSWITHSI+Nexthink%5EEQ";
        gr.color = "green";
        gr.icon = "list";
        gr.group = nexthinkCIBookmarkGroups.sys_id;
        gr.order = 1;
        gr.insert();
    }
}

function createCIUsersBookmark (user) {

    var gr = new GlideRecord("sys_ui_bookmark");
    gr.addQuery("user", user);
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
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
    gr.addQuery("title","My Work");
    gr.query();

    if (!gr.next()) {
        gr.user = user;
        gr.title = "Scripts - Background";
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
    gr.addQuery("title","My Work");
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