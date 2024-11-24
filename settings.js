require("./all/module.js")

/*SC INI FREE KALAU ENC 
JANGAN DI PERJUAL BELIKAN YG ENC
JIKA ADA YG MEMPERJUALBELIKAN SC LAPOR KE DENZ
SCRIPT PRIBADI DENZ-HOSTING

BOLEH UP/BAGIKAN KE PUBLIC 
JIKA KETEMU ERORR LANGSUNG LAPOR KE OWN NY

WA : 085861398259
YT : IDRIS ID
*/

/*~~~~~~~~~~ SETTING BOT ~~~~~~~~~~~*/
global.owner = "6287873607274"//GANTI DENGAN NO LU
global.namabot = "Pushkontak By naszz"//GANTI AJA
global.della = "Naszz-HOSTING"//NAMA STORE ATAU NAMA LU
global.namaowner = "naszz Dev"

//  GANTI DENGAN LIST LU
global.list = `*📮LIST STOREL📮*
panel 
dll`
/*~~~~~~~~~~ SETTINGAN LINK~~~~~~~~~~~*/
global.idsaluran = "120363285238450909@newsletter"//GANTI ID CH LU KALAU GK BISA CET 085861398259
global.linkgc = 'https://chat.whatsapp.com/JUyPU7LzuTc5MlgLHjflAN'//GANTI LINK GC LU
global.linksaluran = "https://whatsapp.com/channel/0029VagTCBr1iUxQVNZbMA3I"//GANTI DENGAN LINK SALURAN LU
global.linkyt = "https://youtube.com/@denzstorex" //masukan link yt lu

global.packname = "WhatsApo Bot Dellz"
global.author = "DELZ BOTZ"

global.autoread = false 
global.anticall = true

/*~~~~~~~~~~ SETTING IMAGE ~~~~~~~~~~~*/
global.image = "./media/denz.png"
global.image2 = './media/denz.png'

/*~~~~~~~~~~ SETTINGS PANEL ~~~~~~~~~~*/
global.egg = "15"
global.loc = "1"
global.domain = "https://public.panel.rerez.official.server-smtp1.my.id"
global.apikey = "ptla_QXY01skw9ujrmPIN3nHCh4Rcm3W3K3iEiMaI14nPWf0"
global.capikey = "ptlc_7ejnv7DDyzv2tC0WF4KLBtpqF3XWD1o1RL8EbpwHWgH"

/*~~~~~~~~~ SETTING MESSAGE ~~~~~~~~~~*/
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "🕧 Proses, Mohon Tunggu Sebentar", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})