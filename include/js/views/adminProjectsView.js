adminProjects = {
    el: "adminProjects",
    itemType: "project",
    url: "admin.php?action=adminProjects",
    dependencies: []
};
pagination.itemsPerPage = 25;
var adminProjectsView = createView(adminProjects);


var accord_projects;
adminProjectsView.$on("iloaded",function()
{
    accord_projects = new accordion2('acc_projects');
});
