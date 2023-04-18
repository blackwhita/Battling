ServerEvents.genericLootTables((event) => {
    event.addGeneric('ico:reward_bag/common', (table) => {
        table.addPool((pool) => {
            if (global.isDestructionMode == true) {
                pool.rolls = 2.0;
                logs.forEach((logs) => {
                    pool.addItem(logs, 2, 8)
                });
            } else {
                pool.rolls = 16.0;
                logs.forEach((logs) => {
                    pool.addItem(logs, 1, 4)
                });
            }
            common_bag.forEach((common_bag) => {
                common_bag.items.forEach((items) => {
                    pool.addItem(items, common_bag.weight, common_bag.count)
                });
            });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            majruszsdifficulty_bag.forEach((majruszsdifficulty_bag) => {
                pool.addEntry({ type: 'item', weight: `${majruszsdifficulty_bag.weight}`, name: `${majruszsdifficulty_bag.name}` });
            });
        });
    });
});