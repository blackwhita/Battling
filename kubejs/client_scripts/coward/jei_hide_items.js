JEIEvents.hideItems((event) => {
    if (global.isCowardMode == false) {
        return;
    }

    jei.coward.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });

    jei.coward.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
});
