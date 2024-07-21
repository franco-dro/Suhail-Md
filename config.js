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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347054926164";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_40_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwSWU3NUg3cGZWbzUrVDkxZXhDbVpoL3VzaGg3TkxXdmFHZmxWWW9OV2lRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFVXVhaHVkQlF1dXdLMGo0NHlzeEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0NGViMmQ2LTE1NGItNGNjMS04MDI0LTI1MDcxN2JjM2E3M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMDYsXG4gICAgICAxNzQsXG4gICAgICAxNTYsXG4gICAgICAyMjUsXG4gICAgICAxNCxcbiAgICAgIDEzLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICAxNDAsXG4gICAgICAyMzksXG4gICAgICAyNixcbiAgICAgIDEyOCxcbiAgICAgIDExLFxuICAgICAgMTEwLFxuICAgICAgMTMyLFxuICAgICAgMTY1LFxuICAgICAgMTgxLFxuICAgICAgMTYwLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE4NSxcbiAgICAgIDQ1LFxuICAgICAgMzQsXG4gICAgICAxOTksXG4gICAgICAxODEsXG4gICAgICAxODQsXG4gICAgICAyMjMsXG4gICAgICAyNDcsXG4gICAgICAxNjAsXG4gICAgICA0MixcbiAgICAgIDI0MixcbiAgICAgIDkxLFxuICAgICAgMjAwLFxuICAgICAgNDAsXG4gICAgICA4MCxcbiAgICAgIDYxLFxuICAgICAgODIsXG4gICAgICA5MyxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TkY0UDJBRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NDkyNjE2NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRpZ2l0YWwgRnJhbmNpc1wiLFxuICAgIFwibGlkXCI6IFwiNjU0MDgyOTE4ODExMDU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVdUcm9BSEVQU1A5YlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlVDkyUGh5ZytxMmp5T2hMQi8wS0g4a0t3RlQ5WEFFWXdqSTNPMGpwVzBRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkViejZIUjdPSlVVdFIva01FRFZiWW9XNjRlT0dtNTF3QzVhc1NKZFF2SlUzV0l6MzdLdFBib0ZOMjN4VFE0aUdwLzExZ2FoT2RmOWcvNVZhLzQxVEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImF0WTE0aGpsemN2TkVhY0VQbEN5MFZlUWg4TythMzg5RThEUTNIcXNKZkpuK2xvb2Z0TXBKa2JDNlNzZmwydm9wc2hSL3VTZnM1N2xpODRuTHhQVERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTQ5MjYxNjQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTgzNjA5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
