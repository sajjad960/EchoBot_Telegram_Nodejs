const Telegraf = require("telegraf");

const bot = new Telegraf("1960446101:AAEhQnA-AxfrkwlqVOtt6jvHL6rqYP8Djgs");

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
`;

bot.use((ctx, next) => {
  if (ctx.updateSubTypes[0] === "text") {
    console.log(`${ctx.from.first_name} said ${ctx.message.text}`);
  } else {
    console.log(ctx.from.first_name + " sent " + ctx.updateSubTypes[0]);
  }
  next();
});

bot.start((ctx) => {
  ctx.reply("Hi I am Echo Bot");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  //   console.log(inputArray);

  let message = "";

  if (inputArray.length === 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);
});

bot.launch();
