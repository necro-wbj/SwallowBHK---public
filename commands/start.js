module.exports = {
    name: 'start',
    description: '投票系統',
    execute(msg, args) {
        let arr = ["1", "/stop"];
        let time;
        const channel = msg.channel.id;
        if (args.length == 1) {
            time = 300000;
        } else {
            time = Number(args[0]) * 1000;
        }
        const collector = new Discord.MessageCollector(msg.channel, m => {
            return arr.includes(m.content)
        }, { time: time });
        client.channels.get(channel).send(`現在開始投票，${time / 1000}秒後自動結算投票，輸入\`/stop\`即可立即結算!`);
        collector.on("collect", (msg, collector) => {
            if (msg.content == "/stop") {
                collector.stop("投票已結束");
            }
        })
        collector.on("end", collected => {
            log = false;
            let people = '';
            let stop = false;
            collected.array().forEach(msg => {
                if (msg.content != "/stop") {
                    people += msg.member.user.toString();
                } else {
                    stop = true;
                }
            });
            function deleteMessage(collected) {
                return new Promise((resolve, reject) => { collected.deleteAll() });
            };
            deleteMessage(collected).then(() => { log = true });
            try {
                client.channels.get(channel).send(new Discord.RichEmbed()
                    .setTitle(`投票結果`)
                    .setDescription(`票數: ${collected.size}`)
                    .addField('投票人員', people)
                );
            } catch (error) {
                if (stop) {
                    msg.channel.send("無人參與投票，此次因指令而結束投票!!")
                } else {
                    console.log(error);
                    msg.channel.send("無人參與投票，此次因投票時間已到而結束投票!!")
                }
            }
        });
    },
};