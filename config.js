const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j";
global.website=process.env.GURL || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254113566713" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254113566713";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGtsY1U4emI4NkF3MTFQbDBhQVFjM09iT1psU2czSzJZbHU5VDZXMG9MST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielFJY3I5VUJRREtiSTd4ZjQyRjM2d1wiLFxuICBcInBob25lSWRcIjogXCIzYmNhY2EzMS1hMWY0LTQ3NmQtYWU0Yy1jNjdjMjEwZmQwYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTQyLFxuICAgICAgMzAsXG4gICAgICA5MixcbiAgICAgIDE1MCxcbiAgICAgIDE2OCxcbiAgICAgIDIxMSxcbiAgICAgIDE1NyxcbiAgICAgIDIzMyxcbiAgICAgIDE0MCxcbiAgICAgIDE3NCxcbiAgICAgIDI1NSxcbiAgICAgIDM5LFxuICAgICAgOTMsXG4gICAgICAxNDAsXG4gICAgICA1MyxcbiAgICAgIDE2OSxcbiAgICAgIDIzMSxcbiAgICAgIDE2MyxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDE3MixcbiAgICAgIDM2LFxuICAgICAgMzgsXG4gICAgICAyMDgsXG4gICAgICAxNixcbiAgICAgIDEyNCxcbiAgICAgIDgsXG4gICAgICAyNDIsXG4gICAgICA3MyxcbiAgICAgIDEwOCxcbiAgICAgIDE5NixcbiAgICAgIDEwNixcbiAgICAgIDIxOCxcbiAgICAgIDEwNSxcbiAgICAgIDQzLFxuICAgICAgMTQ2LFxuICAgICAgNTMsXG4gICAgICAxMjQsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEQ3QkRHWVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMzU2NjcxMzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbnwnZaN8J2WivCdlpHwnZab8J2WlOG1iPCdlanwnZWw8J2WkfCdlprwnZaS8J2WjlwiLFxuICAgIFwibGlkXCI6IFwiMjAwODU4OTYwNzE5OTgwOjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6dXE2OEJFSjMvbUxVR0dDQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3QzVXZkMVAvUXg0WFRNL0ZVTWVnZWh0MVUrM25TeTl6SmZKRlBmSHNUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIVDJBSzlBUjcvaWdEdmQyRFhNWmdGaGo4cmxIbnpRMUd5VjMwK3ZSd3NEbnhIQmVQSFlFRVVkcHUxSkZoSlhFV1RsWnZCMlhqRHlzMDJMTGJKWXVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlZXpwZHRRU2RWOVZKRWJDZDdFc2JDc3dtZHE3ZTUyLzRmdDRkOTBUQ0VLQ3JEZHE5RmJWTUF0MjZSQm1Cdzhod0RXRHd1RlNGTkRQKzlLalhXWkhnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTM1NjY3MTM6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE3MTI5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhXelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFd6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWEkvd3dKaGZRcnEwZFMweVJsYzcxdVE4bng3OHNDN1hEaFNYL2hjQ3dXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjc3MjAyNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐍𝐡𝐞𝐥",
  packname: process.env.PACK_NAME || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",
  botname : process.env.BOT_NAME  || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",
  ownername:process.env.OWNER_NAME|| "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/82aa9c6e73f051f82596d.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
