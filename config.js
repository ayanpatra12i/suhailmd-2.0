const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="ayanpou143@gmail.com"
global.location="Kolkata,India."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,918101400579";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918101400579";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_45_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFJVVFMSk9xbUlab0tpU0tWZzR4T0JzM1FOSUVCWHFxa29mR2ZseGNOTjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNlX3piSjVGU3RTQ3Rvb0JmWXF1REFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTU0NzBiMmUtNmNiNS00MjA1LTgwYTItYzM2MmM4OTNmZGMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDE4NyxcbiAgICAgIDE0NCxcbiAgICAgIDE4MSxcbiAgICAgIDEwNixcbiAgICAgIDE2NCxcbiAgICAgIDEyOSxcbiAgICAgIDkxLFxuICAgICAgMjU1LFxuICAgICAgNzcsXG4gICAgICAyMTksXG4gICAgICA1MyxcbiAgICAgIDEwMyxcbiAgICAgIDUwLFxuICAgICAgMTg4LFxuICAgICAgOTcsXG4gICAgICAyNDksXG4gICAgICA3OSxcbiAgICAgIDIyMCxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyNixcbiAgICAgIDEzNixcbiAgICAgIDQ0LFxuICAgICAgMTQ1LFxuICAgICAgMjExLFxuICAgICAgMTY3LFxuICAgICAgMTk4LFxuICAgICAgNzIsXG4gICAgICAxNjMsXG4gICAgICAxMDgsXG4gICAgICAyNDYsXG4gICAgICAxNDIsXG4gICAgICA3MyxcbiAgICAgIDExNCxcbiAgICAgIDM4LFxuICAgICAgMjA0LFxuICAgICAgODcsXG4gICAgICAxOTQsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGUjlGMVJHS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTAxNDAwNTc5OjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzg0NjQ3NDk1NjgxODU6NzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGFSKzRzQ0VPZlh0YnNHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZRU5ZQWZ4b2hoYUZMVzRQVmxrSFFRdjhJT2ozWmY4YkNPMTJvckFBaERvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxid3FOQWU5MjZNcEtiQzZNd3dvWDZDSlhqUHM4elZrK2VpZUtDaFhWNzd3cDBacFcvVGNadUxBT01ic3JKdE9JeGZucE1LN3FSU09Ec29JZDNObkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm15aEZRc3YrTGkxanh4QUJvWUo2VWlYeVRJRUZUNmhuaVRLb0VtV2pPZFZ5OGJBUEpSTkVTWWc0T1YvWXJ5dy9FU2E5Qmx6ekN5a1hJbTFsT0RlQ0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODEwMTQwMDU3OTo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTIyNDI5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU56a1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnprLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEdZd09NSDlkK2F5MDlhUjRSNkZxZk9uK1lsWk9YN3VsQjIwcFhmNUsvbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjE5NTcwNDYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUxMzU0NzY5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
