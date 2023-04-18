//priority: 800
/*const entries = {
    naturesaura: [
        {
            key: 'block.naturesaura.infused_iron_block',
            value: {
                coward: 'Infused Iron Block',
                destruction: 'Infused Ironwood Block'
            }
        },
        {
            key: 'item.naturesaura.infused_iron',
            value: {
                coward: 'Infused Iron Ingot',
                destruction: 'Infused Ironwood Ingot'
            }
        },
        {
            key: 'advancement.naturesaura.infused_materials.desc',
            value: {
                coward: 'Use the Natural Altar to create Infused Iron',
                destruction: 'Use the Natural Altar to create Infused Ironwood'
            }
        }
    ],
    create: [
        {
            key: 'block.create.andesite_belt_funnel',
            value: {
                coward: 'Andesite Belt Funnel',
                destruction: 'Compressed Stone Belt Funnel'
            }
        },
        {
            key: 'advancement.create.andesite_alloy.desc',
            value: {
                coward: "Obtain some Andesite Alloy, Create's most important resource",
                destruction: "Obtain some Compressed Stone, Create's most important resource"
            }
        }
    ]
};

Object.keys(entries).forEach((mod) => {
    let lang_file = `kubejs/assets/${mod}/lang/en_us.json`;
    let lang_json = JsonIO.read(lang_file);

    entries[mod].forEach((entry) => {
        lang_json[entry.key] = entry.value[packMode];
    });

    JsonIO.write(lang_file, lang_json);
});
*/