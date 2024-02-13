# Discord.js v14 Anti ghost ping system

made by Springles
---

## How to install

1. Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. Create a new Discord bot and obtain the token. You can do this by following the [Discord Developer Portal guide](https://discord.com/developers/docs/intro).

### Installation Steps

Clone the repository to your local machine.
```bash
git clone https://github.com/Springlesss/discord-anti-ghost-ping
```

Navigate to the project directory.
```bash
cd discord-anti-ghost-ping
```
Install the required dependencies using npm.

```bash
npm install discord.js
```

Open the config.json file.
Replace YOUR_BOT_TOKEN with your Discord bot token.
Replace YOUR_ALERT_CHANNEL_ID with the channel id of your alert channel.
You can set the timeout property to either true or false. Setting it to true will active the automatic timeout mode which will timeout anyone that ghost pings someone.
TimeoutMinutes will set the amount of minutes a user will be in a timeout after ghost pinging someone. Setting the above property to false will completely disable this one.
```json
{
  "token": "YOUR_BOT_TOKEN",
  "alertChannelId": "YOUR_ALERT_CHANNEL_ID",
  "timeout": true,
  "timeoutMinutes": "10" 
}
```
Now you can run the bot by using the following command.

```bash
node .
```
---
Your server is now protected from ghost pings!

If you're looking for a way to keep your bot online 24/7, i recommend checking out [Sparked Host](https://sparkedhost.com/). They offer great hosting for only 1$ per month!




