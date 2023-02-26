import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fs from 'fs'

exports.run = {
   usage: ['ia', 'openai'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
if (!text) return client.reply(m.chat, Func.texted('bold', `wait... bro.`), m)
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
client.reply(response.data.choices[0].text)'
    }
