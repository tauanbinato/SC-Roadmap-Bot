const auth = require("./auth.json");
const discord = require("discord.js");

const bot = new discord.Client({disableEveryone: true});

//Bot ready function
bot.on("ready" , async () => {
  console.log(`${bot.user.username} is online`);
  bot.user.setActivity("Looking for Updates..")
})

//Messages function
bot.on("message" , async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  //Im getting the !
  let prefix = auth.prefix;
  //Getting and array of strings
  let messageArray = message.content.split(" ");
  //Saving the first part, the cmd
  let cmd = messageArray[0];
  //looking for args
  let args = messageArray.slice(1);

  if (cmd === `${prefix}hello`) {
    return message.channel.send("Hello!");
  }

})

//Bot login authorization
bot.login(auth.token);
