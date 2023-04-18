JEIEvents.hideItems((event) => {
    if (global.isDestructionMode == false) {
        return;
    }
    jei.destruction.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });

    jei.destruction.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
});
