let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~mr.ravanan*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs


5) $git clone https://github.com/mrravanan/kannapi-bot.git
6) $ls
7) $cd kannapi-bot

the * last * ..
Cuy installation :)
8) npm i
9) node index.js

_You can see the tutorial at_
*Our Youtube:*
https://youtube.com/c/MrRavanan
`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

