//priority: 900
StartupEvents.registry('item', (event) => {
    const bags = [
        'reward_bag_common',
        'reward_bag_contraindication',
        'reward_bag_epic',
        'reward_bag_legendary',
        'reward_bag_mythical',
        'reward_bag_rare'
    ];
    bags.forEach((item) => {
        event.create(`ico:${item}`).group('Ico').texture(`ico:bags/${item}`);
    });
});
