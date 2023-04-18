JEIEvents.information((event) => {
    if (global.isDestructionMode == false) {
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
    jei.destruction.items.disabled.forEach((item) => {
        if (item !== air) {
            event.addItem(item, disabled_item_message);
        }
    });
});
