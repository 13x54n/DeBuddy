import { Telegraf } from 'telegraf';
import { ai } from '../genAI/index'

// Initialize the bot with your token
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "");

// // Handle the /start command
// bot.start((ctx) => {
//   ctx.userInfo = { firstName: 'John', lastName: 'Doe' }; // Example of adding custom properties
//   return ctx.reply(`Welcome, ${ctx.userInfo.firstName}!`);
// });

// Handle a simple text message
bot.on('text', async (ctx) => {
  if (ctx) {
    // Sample interaction
    const { text } = await ai.generate(ctx.message.text);

    return ctx.reply(text);
  }
});

// Launch the bot
bot.launch();

// Gracefully stop the bot on SIGINT/SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Telegram Bot: @DeBuddyBot server is running!');