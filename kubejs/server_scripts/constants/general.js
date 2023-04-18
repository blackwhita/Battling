//priority: 1001
//You need to define an air to facilitate its use in functions
const air = 'minecraft:air';
//A useful array about what mods are available
const modPriorities = [
];

const lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest'];
//Basic colors
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];
const logs = getPreferredItemInTag(Ingredient.of('#minecraft:logs')).id;
const ingots = getPreferredItemInTag(Ingredient.of(`#forge:ingots`)).id;