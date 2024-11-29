const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;

    // Llamar a la API de OpenAI para generar una respuesta
    const openAiResponse = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
            prompt: userMessage,
            max_tokens: 150,
        },
        {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
        }
    );

    const botResponse = openAiResponse.data.choices[0].text;

    // Enviar la respuesta de vuelta al usuario
    bot.sendMessage(chatId, botResponse);
});

console.log('El bot de Telegram está en funcionamiento...');const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;

    // Llamar a la API de OpenAI para generar una respuesta
    const openAiResponse = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
            prompt: userMessage,
            max_tokens: 150,
        },
        {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
        }
    );

    const botResponse = openAiResponse.data.choices[0].text;

    // Enviar la respuesta de vuelta al usuario
    bot.sendMessage(chatId, botResponse);
});

console.log('El bot de Telegram está en funcionamiento...');