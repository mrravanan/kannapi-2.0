let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 കണ്ണാപി ബോട്ട് 2.0 〙 ═
╠➥  Made in javascript via NodeJs
╠➥ Rec: ʀᴀɴᴊɪᴛʜ [ᴍʀ.ʀᴀᴠᴀɴᴀɴ]
╠➥ Script: ᴍʀ.ʀᴀᴠᴀɴᴀɴ
║
╠➥ YouTube: https://youtube.com/c/MMrRavan
╠➥ instagram: https://instagram.com/__mr_ravanan?igshid=9opwnwh7xvtm
╠➥ YouTube 2nd channel : https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
║
╠═〘 Thanks To 〙 ═
╠➥ ᴍʀ.ʀᴀᴠᴀɴᴀɴ ™ 
╠➥ ™ ɪɴᴅᴏɴᴇsɪᴀ
            ʙʀᴜᴛᴀʟ
            ᴍᴀʀᴋɪᴠ
            ʀᴀᴠᴀɴᴀɴ
            ᴄʏʙᴇʀ ᴋᴀʟʟᴀɴ
            ʜɪᴛʟᴇʀ ᴛʜᴇ ɴᴀᴢɪ
            ᴄʏʙᴇʀ ᴄᴏᴍᴍᴀɴᴅᴏ
            sʜᴀʀɪᴋ
            ᴠɪsʜɴᴜ
            ᴡʜ173 5ᴘ1ᴅ3ʀ
             ʟᴏʀᴅ ᴏsɪʀɪs
╠➥ 
║
╠═〘 ബോട്ട്  〙 ═
╠➥ MAKE GROUP ADMIN 
╠➥ TURN ON YOUR DATA
╠➥ CONTACT : wa. me//+919048410619
║
║>Request? wa. me//+919048410619
║
╠═〘 കണ്ണാപി 2.0 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

