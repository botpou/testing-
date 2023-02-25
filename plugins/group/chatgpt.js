exports.run = {
   usage: ['ia', 'ai'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!text) throw `*enter a request or an order to use the chatgpt*\n\n*—◉ 𝙴xample*\n*◉ ${usedPrefix + command}series 2022  netflix*\n*◉ ${usedPrefix + command} write a js code*`
try {
client.reply(`*Fon ti tann me bro*`)
         let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
         let hasil = await tiores.json()
client.reply(`${hasil.result}`.trim())
} catch {
throw `*𝙴𝚁𝚁𝙾𝚁*`
        }
      }
   },
   error: false,
   cache: true,
   location: __filename
}
