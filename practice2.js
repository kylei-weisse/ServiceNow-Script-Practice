// var someIncidents = newGlideRecord('incident')
// someIncidents.addQuery('active','true' || 'category', 'hardware')
// someInsicidents.setLimit(10)
// while (someIncidents.next()) {
//     gs.info(incidents.number + ": " + incidents.created_date + " " + incidents.short_description);

// }

var incidents = new GlideRecord("incident");
incidents.addQuery("active=true^category=hardware");
incidents.setLimit(10);
incidents.query();
while (incidents.next()) {
    gs.info(incidents.number + ": " + incidents.opened_at + " " + incidents.short_description);
}
