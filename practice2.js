var someIncidents = newGlideRecord('incident')
someIncidents.addQuery('active','true' || 'category', 'hardware')
someInsicidents.setLimit(10)
while (someIncidents.next()) {
    gs.info(incidents.number + ": " + incidents.created_date + " " + incidents.short_description);

}