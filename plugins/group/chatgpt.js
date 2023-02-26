exports.run = {
   usage: ['ia', 'ai'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!text) throw `*enter a request or an order to use the chatgpt*\n\n*—◉ 𝙴xample*\n*◉ .ia series 2022  netflix*\n*◉ .ia write a js code*`
      try {
client.reply(m.chat, `*Fon ti tann me bro*`, m)
      let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
         let hasil = await tiores.json()
client.reply(m.chat, `${hasil.result}`.trim()), m)
} catch {
throw `*𝙴𝚁𝚁𝙾𝚁*`
        }
      }
   },
   error: true,
   location: __filename
}
