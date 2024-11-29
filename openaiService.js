const axios = require('axios');
require('dotenv').config();

const openaiService = async (prompt) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error al llamar a la API de OpenAI:', error);
        return 'Lo siento, no pude procesar tu solicitud.';
    }
};

module.exports = openaiService;