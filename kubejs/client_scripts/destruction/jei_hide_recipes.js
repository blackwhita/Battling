/*JEIEvents.removeRecipes((event) => {
    if (global.isDestructionMode == false) {
        return;
    }
    jei.destruction.recipes.hidden.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove('create:automatic_shaped', [id]);
                } catch (err) {
                    // do nothing
                }
            }
            // console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });
});
*/