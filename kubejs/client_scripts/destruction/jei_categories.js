JEIEvents.removeCategories((event) => {
    if (global.isDestructionMode == false) {
        return;
    }
    event.remove(jei.destruction.categories.hidden);
});
