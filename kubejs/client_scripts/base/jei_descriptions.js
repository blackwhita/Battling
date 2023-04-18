JEIEvents.information((event) => {
    const descriptions = [
        /*{
            items: ['item'],
            text: ['text']
        }*/
    ];
    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });
    jei.base.items.disabled.forEach((item) => {
        if (item !== air) {
            event.addItem(item, disabled_item_message);
        }
    });
});
