//priority: 1004
const setMode = (player) => {
    console.log('setting mode for player: ' + player);
    if (global.packmode == 'destruction') {
        // player.data.ftbquests.complete('0000000000000FEB');
    } else {
        // player.data.ftbquests.reset('0000000000000FEB');
    }
};
ServerEvents.highPriorityData((event) => {
    if (event.server) {
        event.server.players.forEach((player) => {
            setMode(player);
        });
    }
});

const defaultConfig = {
    mode: 'coward',
    message: 'Valid modes are coward and destruction.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'coward' and 'destruction'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isCowardMode = packMode == 'coward';
global.isDestructionMode = packMode == 'destruction';
const isCowardMode = packMode == 'coward';
const isDestructionMode = packMode == 'destruction';

console.log(`Current packmode is: ${global.packmode}`);
