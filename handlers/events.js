const fs = require("fs");
const allevents = [];
module.exports = async (client) => {
  try {
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files) {
        try{
          const event = require(`../events/${dir}/${file}`)
          let eventName = file.split(".")[0];
          if(eventName == "message") continue;
          allevents.push(eventName);
          client.on(eventName, event.bind(null, client));
        }catch(e){
          console.log(String(e.stack).grey.bgRed)
        }
      }
    }
    await ["client", "guild"].forEach(e => load_dir(e));
    try {
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `SUBSCRIBE!`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `PLEASE SUBSCRIBE TO UNKNOWN PHV!`.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ By PHV /-/`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By PHV/-/`.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + `  /-/ Discord: PHV#7163 /-/`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By Discord: PHV#7163 /-/`.length) + "   ┃".bold.brightGreen)
      console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
    } catch {
      /* */ }
    try {
      const stringlength2 = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + `Logging into the BOT...`.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length - `Logging into the BOT...`.length) + "┃".bold.yellow)
      console.log(`     ┃ `.bold.yellow + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.yellow)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.yellow)
    } catch {
      /* */ }
  } catch (e) {
    console.log(String(e.stack).grey.bgRed)
  }
};

