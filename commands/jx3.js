module.exports = {
    name: 'jx3',
    description: '關於劍三的指令',
    execute(msg, args) {
        if (args.length == 0) {
            msg.channel.send("指令使用方法: ```/jx3 破防 會心 御勁 會效 御效 御效命中 化勁```")
        } else {
            if (args[0] == "公式") {
                msg.channel.send("傷害係數: (1+破防)((會心-御勁)(會效-御效)+命中)*(1-化勁)")
            } else {
                let 破防 = args[0]
                let 會心 = args[1]
                let 御勁 = args[2]
                let 會效 = args[3]
                let 御效 = args[4]
                let 命中 = args[5]
                let 化勁 = args[6]
                let 承傷 = (1 + 破防) * ((會心 - 御勁) * (會效 - 御效) + 命中) * (1 - 化勁)
                msg.channel.send(```傷害係數: ${承傷}```)
            }
        }
    },
};
