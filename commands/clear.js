module.exports = {
    name: 'clear',
    description: '批量刪除訊息',
    execute(msg, args) {
        let msgID = args[0];
        msg.channel.fetchMessage(msgID).then(message => {
            log = false;
            message.delete();
        }).catch(err => console.error(err));
        msg.channel.fetchMessages({ after: msgID }).then(message => {
            log = false;
            message.deleteAll();
        }).catch(err => console.error(err)).then(() => log = true);
    },
};
