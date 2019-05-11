// First we require the Discord.js library.
const Discord = require("discord.js");

// Now we require the module.
const DIL = require("discord.js-image-logger");

// Start a new Discord Client.
const client = new Discord.Client();
const 雁歸LOG = "575403571634503691";
const 師門LOG = "551502529737916447";
const 交誼廳 = "561258408863334400";
const 師門這邊請 = "325215553973256202";

// Start the module with some custom options.
DIL(client, {
    guildID: 561257391056879616,
    method: "embed",
    logChannel: 雁歸LOG,
    channels: 交誼廳
});

DIL(client, {
    guildID: 322800099480829962,
    method: "embed",
    logChannel: 師門LOG,
    channels: 師門這邊請
});


client.on("ready", () => {
    console.log(`-----------------------------\n伺服器準備啟動\n-----------------------------`);
});


// Login the Client
client.login("token");