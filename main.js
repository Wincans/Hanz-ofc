//MAIN.JS GW ENC DIKIT CUMAN YG LANGKAH DOANK
const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
baterai = 'unknown'
charging = 'unknown'
const encodeUrl = require('encodeurl')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const dtod = "6285706035039@s.whatsapp.net"
const otod = "6285706035039@s.whatsapp.net"
Hanz = fs.readFileSync("./media/TD.jpg")
img = fs.readFileSync("./media/TD.jpg")
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const settings = JSON.parse(fs.readFileSync('./media/setting.json'))
require('./Hanz.js')
nocache('./Hanz.js', module => console.log(`${module} Telah Update. Perubahan Ini Akan di terima Oleh Pemilik Base/Haris/Hanz`))

//ᗪᗩY
var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}
switch(bulan1) { 
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}
switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}
var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
var tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
var tampilWaktu =jams + ":" + menit + ":" + detik;

const starts = async (Hanz = new WAConnection()) => {
console.log(color('> HARI ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))
console.log(color('ՏᑕᖇIᑭT IᑎI ᗪI ᒍᗩᘜᗩ ᗪᗩᑎ ᗪI ᒪIᑎᗪᑌᑎᘜI Oᒪᗴᕼ ᕼᗩᖇIՏ\n\n', 'green'), color('\n======T͜͡E͜͡R͜͡I͜͡M͜͡A͜͡ K͜͡A͜͡S͜͡I͜͡H͜͡ B͜͡A͜͡N͜͡Y͜͡A͜͡K͜͡ K͜͡E͜͡P͜͡A͜͡D͜͡A͜͡======\nゑHaris gwメ\nゑMoona Senpaiメ\nゑAdiメ\nゑDevanメ\nゑYudhaメ\nゑRafiメ\nゑWildanメ\nゑPak Tijetメ\nゑPutraメ\nゑSawalyメ\nゑXfafaメ\nゑRagil Gayメ\nDAN SELURUH CREATOR BOT', 'white'))
console.log(color('\n\nᑭᗩᑎTᑌᑎ!!\n\nᘜITᗩᖇ Kᑌ ᑭᗴTIK ᗷᗩՏՏ Kᑌ ᗷᗴTOT\nᕼᗩI ᗩᑎᗩK TOᒪOᒪ\nᘜᗩᑌՏᗩᕼ ᗪI ᖇᗴᑎᗩᗰᗴ KOᑎTOᒪ!!', 'pink'))    
Hanz.logger.level = 'warn'
Hanz.version = [2, 2143, 3]
Hanz.browserDescription = [ 'WH TEAM', 'SAFARI', '3.0' ] 
console.log(banner)
Hanz.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya Kontol...!'))
})
const floc = {key : {participant : '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `By: メHᴀɴᴢ Oғᴄメ`, jpegThumbnail: Hanz}}}
//ᗷᗩTᗴՏ
//ᗷᑌTTOᑎ ᖴOTO/Iᗰᗩᘜᗴ
const sendButImage = async (from, context, fotext, img, but) => {
ptod = "6285706035039@s.whatsapp.net"
stod = `Hai👋 Saya ${botname}`
gam = img
jadinya = await Hanz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {
quoted: floc,
contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`HANZ々OFC彡 [BOTZ🎭]`,body:`SUBSCRIBE HANZ々OFC彡`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://www.instagram.com/reel/CYWTXmuJnf2/ugh_Yfb_gii_kontol`,}}
})
}
//ᑕOᑎᗴᑕT
fs.existsSync('./Hanz.json') && Hanz.loadAuthInfo('./Hanz.json')
Hanz.on('connecting', () => {
start('2', 'Menghubungkan...')
})
//ՏᑌᑕՏᗴՏ
Hanz.on('open', () => {
success('2', 'Terhubung Jangan Lupa Subscribe Hanz Ofc')
console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    console.log(color(' ||> ','cyan'), color(`     Hallo Kak,  ${tampilHari}`, 'cyan'))
    console.log(color(' ||> ','cyan'), color('    Jangan Lupa Subscrib Yt HANZ々OFC彡😝', 'cyan'))
    console.log(color(' ||> ','cyan'), color('   Script Ori By Haris Setiawan🛐', 'cyan'))
    console.log(color('','aqua'), color(`||================================================||`, "cyan"))
start('🎭','')
    })
Hanz.on('ws-close', () => {
console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
})   
Hanz.on('close', async () => {
console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
})
await Hanz.connect({timeoutMs: 30*1000})
fs.writeFileSync('./Hanz.json', JSON.stringify(Hanz.base64EncodedAuthInfo(), null, '\t'))
//ᗩᑎTI ᑕᗩᒪᒪ
Hanz.on("CB:Call", json => {
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Hanz.sendMessage(call, `*Sorry No Anda Di Block Karna Menelpon/Vc Bot!*`, MessageType.text)
.then(() => Hanz.blockUser(call, "add"))
})
//ᑕOᑎՏOᒪᗴ ᑭᗴᖇՏᗴᑎ ᗷᗩTᖇᗴY
Hanz.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log('Baterai : ' + batterylevel + '%')
})
global.batrei = global.batrei ? global.batrei : []
Hanz.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})    
//ᑕOᑎՏOᒪᗴ ᖇᗴՏᑭOᑎ ᑭᗴᖇᑌᗷᗩᕼᗩᑎ ᘜᖇOᑌᑭ
Hanz.on("group-update", async (anu) => {
mdata = await Hanz.groupMetadata(anu.jid);
//ᘜᖇOᑌᑭ Oᑭᗴᑎ
if (anu.announce == "false") {
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `ʜᴀɴᴢ々ᴏꜰᴄ`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
teks = `[ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan`;
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol});
console.log(`- [ Group Opened ] In ${mdata.subject}`);
//ᘜᖇOᑌᑭ ᑕᒪOՏᗴ
} else if (anu.announce == "true") {
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `ʜᴀɴᴢ々ᴏꜰᴄ`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
teks = `[ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan`;
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol});
console.log(`- [ Group Closed ] In ${mdata.subject}`);
//ᗴᗪIT ᗪᗴՏKᖇIᑭՏI ᘜᖇOᑌᑭ
} else if (!anu.desc == "") {
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `ʜᴀɴᴢ々ᴏꜰᴄ`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `[ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
anu.descOwner.split("@")[0]
}\n Deskripsi Baru : ${anu.desc}`;
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol});
console.log(`- [ Group Description Change ] In ${mdata.subject}`);
//ᗰᗴᗰᗴᗷᗴᖇ ᗪᗩᑭᗩT ᗴᗪIT IᑎᖴO
} else if (anu.restrict == "false") {
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `ʜᴀɴᴢ々ᴏꜰᴄ`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
teks = `[ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol});
console.log(`- [ Group Setting Change ] In ${mdata.subject}`);
//ᕼᗩᑎYᗩ ᗩᗪᗰIᑎ ᗪᗩᑭᗩT ᗴᗪIT IᑎᖴO
} else if (anu.restrict == "true") {
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `ʜᴀɴᴢ々ᴏꜰᴄ`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
teks = `[ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol});
console.log(color('|TRM|'), color(` [ Group Setting Change ] In ${mdata.subject}`,  'cyan'))
}
});	
//ᗷᗩTᗴՏ
Hanz.on('chat-update', async (message) => {
require('./Hanz.js')(Hanz, message, welkom)
})  
//ᗯᗴᒪᑕOᗰᗴ
Hanz.on("group-participants-update", async (anu) => {
const isWelkom = welkom.includes(anu.jid)
try {
groupMet = await Hanz.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await Hanz.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await Hanz.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(Hanz.user.jid)) {
Hanz.sendMessage(anu.jid, "Haii.", "conversation")
}
if (!isWelkom) return
//ᗯᗴᒪᑕOᗰᗴ ᗰᗴᗰᗷᗴᖇ ᗰᗩՏᑌK
if (anu.action == "add" && !mem.includes(Hanz.user.jid)) {     
mdata = await Hanz.groupMetadata(anu.jid)
memeg = mdata.participants.length
num = anu.participants[0]
let v = Hanz.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
wel = `Halo @${anu_user} \nWelcome In ${mdata.subject}\n
ɴᴀᴍᴀ:
ᴀꜱᴀʟ:
ᴋᴏᴛᴀ:
ᴘᴀꜱᴀɴɢᴀɴ:
ᴀʟᴀꜱᴀɴ ɢᴀʙᴜɴɢ:
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
ₛᵤBₛCᵣᵢBₑ
https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
buff = await getBuffer(
`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/JKdHDL9/20211215-153843.jpg`)
but = [
{ buttonId: 'add', buttonText: { displayText: 'ᗯᗴᒪᑕOᗰᗴ' }, type: 1 }
]
sendButImage(mdata.id, wel, "Sᴇʟᴀᴍᴀᴛ Dᴀᴛᴀɴɢ", buff, but)
console.log(color('|MEMBER BARU|'), color(`Masuk ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
if (!isWelkom) returnop
//ᗯᗴᒪᑕOᗰᗴ ᗰᗴᗰᗷᗴᖇ Kᗴᒪᑌᗩᖇ
if (anu.action == "remove" && !mem.includes(Hanz.user.jid)) {        
mdata = await Hanz.groupMetadata(anu.jid)
num = anu.participants[0]
let w = Hanz.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = w.vname || w.notify || num.split("@")[0]
time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
memeg = mdata.participants.length
out = `Bayy Beban✌
ɴᴀᴍᴀ: ${anu_user}
ɴᴏᴍᴇʀ: ${num.split('@')[0]}
ᴛɪᴍᴇ: ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}
ɢʀᴏᴜᴘ: ${mdata.subject}
ᴍᴇᴍʙᴇʀ: ${groupMembers.length}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
ₛᵤBₛCᵣᵢBₑ
https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
buff = await getBuffer(
`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/dLKG72L/20211219-090710.jpg`)
but = [
{ buttonId: 'remove', buttonText: { displayText: 'ᗰᗴᗰᗷᗴᖇ ᘜᗩY OᑌT ᗩᒍᗩ KᑎTᒪ' }, type: 1 }
]
sendButImage(mdata.id, out, "Mᴀᴛɪ Aᴊᴀ Kᴏɴᴛᴏʟ", buff, but)
console.log(color('|MEMBER KELUAR|'), color(`Keluar ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
if (anu.action == "promote") {
//ᑭᖇOᗰOTᗴ/ᒍᗩᗪI ᗩᗪᗰIᑎ
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `Selamat Admin Baru`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
const mdata = await Hanz.groupMetadata(anu.jid)
anu_user = Hanz.contacts[mem]
num = anu.participants[0]
try {
ppimg = await Hanz.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `P R O M O T E - D E T E C T E D\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nSelamat Yah Anda Sudah Jadi Admin`
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
if (anu.action == "demote") {
//ᗪᗴᗰOTᗴ ᑌᑎ ᗩᗪᗰIᑎ
const ftrol = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 2022,status: 1, surface : 1, message: `Mampus Udah Gk Admin`,  orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`, thumbnail: Hanz, sellerJid: '0@s.whatsapp.net' }}}
anu_user = Hanz.contacts[mem]
num = anu.participants[0]
const mdata = await Hanz.groupMetadata(anu.jid)
try {
ppimg = await Hanz.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `D E M O T E - D E T E C T E D\nUsername: @${num.split('@')[0]}\nTime : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGroup: ${mdata.subject}\n\nMamposs Nggak jadi Admin lagi`
Hanz.sendMessage(mdata.id, teks, MessageType.text, {quoted: ftrol})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
} catch (e) {
console.log("Error : %s", color(e, "red"))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
console.log('TAMPILAN WAKTU DIBAWAH')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
