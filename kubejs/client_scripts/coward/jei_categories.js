JEIEvents.removeCategories((event) => {
    if (global.isCowardMode == false) {
        return;
    }
    //console.log(event.getCategoryIds()); //log a list of all category ids to logs/kubejs/client.txt

    event.remove(jei.coward.categories.hidden);
});
