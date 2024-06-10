# IMPORTANT Notice!!
PHV DEVELOPMENT - We've only updated/modified parts of this code and added few commands, this bot is originally made by [Tomato6966](https://github.com/Tomato6966/Multipurpose-discord-bot). So Credits go to him.

For Bot Tutorial [Click Me](https://www.youtube.com/watch?v=cx0nTQxc8Kk&t).
Having Bugs & Errors? Join our support server [Click Me](https://discord.gg/cJkkCtMV99).

# Public Bot 
 
[**Invite the Public Version of this Bot**](https://discord.com/oauth2/authorize?client_id=1165909952037126186&permissions=103347652792&scope=bot%20applications.commands)


  **NOTE:** It is suggested to use the [Sharded (&Clustered) version](https://github.com/Tomato6966/Multipurpose-discord-bot/tree/sharded_with_mongo), if you plan on using it for a VERIFIED BOT (on more then 2000 Servers!)
 

# Installation Guide 🔥

## ✅ Hosting Requirements

<details>
  <summary>Click to expand</summary>

  * [nodejs](https://nodejs.org) version 16.6 or higher, I recommend the latest STABLE version
  * [python](https://python.org) version 3.8 or higher, to install the database `enmap` (better-sqlite3)
  * A VPS would be advised, so you don't need to keep your PC/laptop/RasPi 24/7 online! [Click here for a debian setup](https://github.com/Tomato6966/Debian-Cheat-Sheet-Setup/wiki/).

</details>

## 🤖 Bot Requirements

<details>
  <summary>Click to expand</summary>
  **NOTE:** It is suggested to use the [Sharded (&Clustered) version](https://github.com/Tomato6966/Multipurpose-discord-bot/tree/sharded_with_mongo), if you plan on using it for a VERIFIED BOT (on more then 2000 Servers!)
 
</details>

## 🤖 Configuration and Starting

<details>
  <summary>Click to expand</summary>

  **NOTE:** *You can do the exact same configuration inside of the `example.env` file, just make sure to rename it to `.env` or use environment variables!*
 
   1. Check `🎶 Music Requirements` that you started lavalink / use a valid public lavalink station.
   2. Fill in all required data in `./botconfig/config.json` **NOTE:** *If you're on replit.com, it is exposed to everyone!(use .env instead)*
   3. Fill in all required data in the `.json` files in `./social_log/` (`./social_log/streamconfig.json` & `./social_log/twitter.json`), if you want the SOCIAL LOGS to work! (the key `authToken` in streamconfig does not need to be filled in!)
   4. You can adjust some settings in the other `./botconfig/*.json` Files, **BUT PLEASE __KEEP__ MY CREDITS & ADS!** This is the only way on how my hard work is "revenued".
   5. Now start the bot by opening a cmd line in that folder and typing: `node index.js` or `npm start`
     * If you don't want to keep the terminal open or if you're on linux, check out [pm2 (and my tutorial)](https://github.com/Tomato6966/Debian-Cheat-Sheet-Setup/wiki/4-pm2-tutorial) and type: `pm2 start --name Bot_Name index.js`
  
</details>

## ❓ Where to get which Api-Key(s)

<details>
  <summary>Click to expand</summary>

  **NOTE:** *You can do the exact same configuration inside of the `example.env` file, just make sure to rename it to `.env` or use environment variables!*
 
  1. `./botconfig/config.json`
     * `token` you can get from: [discord-Developers](https://discord.com/developers/applications)
     * `memer_api` you can get from: [Meme-Development DC](https://discord.gg/Mc2FudJkgP)
     * `spotify.clientSecret` you can get from: [Spotify-Developer](https://developer.spotify.com)
     * `spotify.clientID` you can get from: [Spotify-Developer](https://developer.spotify.com)
     * `fnbr` is a FNBR token, which you may get from [FNBRO.co](https://fnbr.co/api/docs) (needed for fnshop)
     * `fortnitetracker` is a FORTNITE TRACKER token, which you may get from [fortnitetracker.com](https://fortnitetracker.com/site-api) (needed for fnstats)
  2. `./social_log/streamconfig.json`
     * `twitch_clientID` you can get from: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * `twitch_secret` you can get from: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * `authToken` is not required to be filled in --> will be done automatically
  3. `./social_log/twitter.json`
     * `consumer_key` you can get from: [twitter Developers](https://developer.twitter.com)
     * `consumer_secret` you can get from: [twitter Developers](https://developer.twitter.com)
     * `access_token` you can get from: [twitter Developers](https://developer.twitter.com)
     * `access_token_secret` you can get from: [twitter Developers](https://developer.twitter.com)
  
</details>


## SUPPORT ME AND MILRATO DEVELOPMENT

> You can always support me by inviting one of my **Discord Bots**

[![2021's best Music Bot | Lava Music](https://cdn.discordapp.com/attachments/748533465972080670/817088638780440579/test3.png)](https://lava.milrato.dev)
[![Musicium Music Bot](https://cdn.discordapp.com/attachments/742446682381221938/770055673965707264/test1.png)](https://musicium.musicium.dev)
[![Milrato Multi Bot](https://cdn.discordapp.com/attachments/742446682381221938/770056826724679680/test1.png)](https://milrato.milrato.dev)
