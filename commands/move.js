module.exports = {
    name: 'move',
    description: '批量移動人員的指令',
    execute(channel, msg, args) {
        mark = msg.guild.members.filter((GuildMember, ID) => {
            return GuildMember.voiceChannelID == args[0]
        })
        mark.forEach((GuildMember, ID) => {
            GuildMember.setVoiceChannel(channel);
        });
    }
}
