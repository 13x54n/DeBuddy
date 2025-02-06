import { Telegraf, Context } from 'telegraf';

// Define a custom context with additional properties
interface MyContext extends Context {
  userInfo?: {
    firstName: string;
    lastName: string;
  };
}

// Initialize the bot with your token
const bot = new Telegraf<MyContext>(process.env.TELEGRAM_BOT_TOKEN || "");

// Handle the /start command
bot.start((ctx) => {
  ctx.userInfo = { firstName: 'John', lastName: 'Doe' }; // Example of adding custom properties
  return ctx.reply(`Welcome, ${ctx.userInfo.firstName}!`);
});

// Handle a simple text message
bot.on('text', (ctx) => {
  if (ctx.userInfo) {
    return ctx.reply(`Hello ${ctx.userInfo.firstName}, you said: ${ctx.message.text}`);
  }
  return ctx.reply('Hello, you sent a message!');
});

// Launch the bot
bot.launch();

// Gracefully stop the bot on SIGINT/SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
