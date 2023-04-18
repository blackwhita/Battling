JEIEvents.information((event) => {
    if (global.isCowardMode == false) {
        return;
    }

    const descriptions = [
        /*{
            items: ['item'],
            text: [`text`]
        }*/
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.coward.items.disabled.forEach((item) => {
        if (item !== air) {
            console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
