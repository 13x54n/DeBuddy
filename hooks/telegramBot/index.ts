import { Telegraf, Context } from 'telegraf';
import {chat} from '../genkit/index';

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
  if (ctx) {
    // Sample interaction
    (async () => {
      // Example conversation where user asks about crypto trading
      const simpleResponse = await chat.send('hello');
      console.log(simpleResponse);

      return ctx.reply('Hello, you sent a message!');
    })();
  }
});

// Launch the bot
bot.launch();

// Gracefully stop the bot on SIGINT/SIGTERM
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Telegram Bot: @DeBuddyBot server is running!');