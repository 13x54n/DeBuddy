import { genkit, z } from 'genkit';
import { googleAI, gemini15Flash } from '@genkit-ai/googleai';

// Initialize the AI with Gemini model and GoogleAI plugin
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

// Define the tools with proper input/output schemas

// Tool for executing crypto trade based on user recommendation
const cryptoTradeTool = ai.defineTool(
  {
    name: 'cryptoTradeTool',
    description: 'Executes crypto trade based on user recommendation.',
    inputSchema: z.object({
      tradeRecommendation: z.string().describe('A crypto trading recommendation, e.g., "Buy Bitcoin"'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    // Simulating execution of crypto trade
    return `Executing crypto trade based on recommendation: ${input.tradeRecommendation}`;
  }
);

// Tool to freeze contract due to a breach (e.g., smart contract breach detected)
const freezeContractTool = ai.defineTool(
  {
    name: 'freezeContractTool',
    description: 'Freezes a contract in case of a protocol breach.',
    inputSchema: z.object({}),
    outputSchema: z.string(),
  },
  async () => {
    return 'Contract frozen due to suspicious activity. Admin notified!';
  }
);

// Tool to send alert to Telegram admins
const sendTelegramAlertTool = ai.defineTool(
  {
    name: 'sendTelegramAlertTool',
    description: 'Sends an alert to admins on Telegram.',
    inputSchema: z.object({
      message: z.string().describe('Message to send to admins on Telegram'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    return `Telegram message sent to admins: ${input.message}`;
  }
);

// Tool to send alert to community via X (Twitter)
const sendXTweetAlertTool = ai.defineTool(
  {
    name: 'sendXTweetAlertTool',
    description: 'Sends an alert to the community on X (Twitter).',
    inputSchema: z.object({
      message: z.string().describe('Message to send to the community on X (Twitter)'),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    return `Tweet sent to community: ${input.message}`;
  }
);

// Define Crypto Trading Agent
const cryptoTradingAgent = ai.definePrompt(
  {
    name: 'cryptoTradingAgent',
    description: 'Handles crypto trading based on user recommendations.',
    tools: [cryptoTradeTool],
  },
  `{{role "system"}} You are a crypto trading assistant. Help users execute crypto trades based on their recommendations.`
);

// Define Protocol Guard Agent
const protocolGuardAgent = ai.definePrompt(
  {
    name: 'protocolGuardAgent',
    description: 'Monitors crypto protocol for breaches and sends alerts if detected.',
    tools: [freezeContractTool, sendTelegramAlertTool, sendXTweetAlertTool],
  },
  `{{role "system"}} You are a protocol guard for a crypto system. Monitor for breaches, freeze contracts if necessary, and notify admins via Telegram and the community via X (Twitter).`
);

// Define a triage agent to route between crypto trading and protocol guard
const triageAgent = ai.definePrompt(
  {
    name: 'triageAgent',
    description: 'Routes to the appropriate agent based on user request.',
    tools: [cryptoTradingAgent, protocolGuardAgent],
  },
  `{{role "system"}} You are an AI assistant for Pavel's Crypto. Greet the user and ask how you can assist. If the request is related to trading, route to the CryptoTradingAgent. If related to a protocol breach or security issue, route to the ProtocolGuardAgent.`
);

// Create a chat instance for multi-turn conversations
export const chat = ai.chat(triageAgent);

// Sample interaction
(async () => {
  // Example conversation where user asks about crypto trading
  const tradingResponse = await chat.send('I want to trade Bitcoin to Ethereum at current market rates.');
  console.log(tradingResponse);

  // Example conversation where user reports a breach
  const breachResponse = await chat.send('There is a breach in the contract, please freeze it and notify admins.');
  console.log(breachResponse);
})();
