ItemEvents.tooltip((event) => {
    if (global.isCowardMode == false) {
        return;
    }
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        // {
        //     items: ['kubejs:altered_recipe_indicator'],
        //     text: [Text.of('Recipe altered for Enigmatica 9: Destruction. Refer to JEI.').gold()]
        // }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.toopltips.forEach((tooltip) => {
        event.add(tooltip.item, tooltip.coward);
    });

    jei.coward.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
