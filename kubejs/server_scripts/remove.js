//priority:1000000
ServerEvents.recipes(event => {
    const itemsToAllRemove = [
        'twilightforest:uncrafting_table'
    ];
    itemsToAllRemove.forEach((item_remove) => {
        if (Item.exists(item_remove)) {
            //event.remove({ input: item_remove })
            event.remove({ output: item_remove })
        }
    })
})

