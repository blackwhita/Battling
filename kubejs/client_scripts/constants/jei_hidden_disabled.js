//priority: 1000
const disabled_item_message =
    "This item has been disabled";
const disabled_item_tooltip = 'This item has been disabled.';
const jei = {
    base: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    coward: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    destruction: {
        items: { hidden: [], disabled: [] },
        fluids: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    }
};
// Base
jei.base.items.disabled = [];
jei.base.items.hidden = [
    'twilightforest:uncrafting_table'
];
jei.base.fluids.hidden = [];
jei.base.categories.hidden = [];
// Coward
jei.coward.items.disabled = [];
jei.coward.items.hidden = [];
jei.coward.fluids.hidden = [];
jei.coward.categories.hidden = [];
// Destruction
jei.destruction.items.disabled = [];
jei.destruction.items.hidden = [];
jei.destruction.fluids.hidden = [];
jei.destruction.categories.hidden = [];
jei.destruction.recipes.hidden = [];
//
jei.toopltips = [
    { item:'ico:reward_bag_contraindication', coward:Text.of(`Cowards can't have it.`) ,destruction:Text.of(`It has been extensively cleared, even so you still have a chance to obtain it`) },
    { item:'ico:reward_bag_mythical', coward:Text.of(`Even among cowards, there is luck.`) ,destruction:Text.of(`Only brave people can obtain it`) }
]