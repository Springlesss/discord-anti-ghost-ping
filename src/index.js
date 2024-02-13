const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log('The bot is ready to go!')
});

client.on('messageDelete', message => {
    if (message.mentions.users.size > 0) {
        if (message.content == `${message.member.id}`) return;
        const embed = new EmbedBuilder()
        .setTitle('**Ghost ping detected!**')
        .setDescription(`Message: \n ${message.content} \n \n The user who ghost pinged: ${message.author}`)
        .setTimestamp()
        .setThumbnail('https://cdn3.emoji.gg/stickers/1127-ping.png')
        .setColor('Red')

        const alertChannel = message.guild.channels.cache.get(config.alertChannelId);
        alertChannel.send({ embeds: [embed] });

        if (config.timeout == true) {
            message.member.timeout(config.timeoutMinutes * 60 * 1000).catch(() => console.log('The bot is missing permissions!'))
        }
    }
});

client.login(config.token);