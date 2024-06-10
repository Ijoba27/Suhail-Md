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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153038151";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_40_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0RnNXYklDdFFJTGlTdFFBMGluVjErdngyTUczZ1g2U21CNUJId0Fsd0hjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTMwMzgxNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBREY4MTQ1REQ1OTIwMDI2NEVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODAxMjQzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpTWRlQlAwX1JJdVlSRnZnN3BVSEhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4NzVjN2ExLTVkMmItNGY3MS05MjM4LWVjNGJhNWNkOGRjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxMDYsXG4gICAgICAxMDEsXG4gICAgICA0MyxcbiAgICAgIDU2LFxuICAgICAgMTg3LFxuICAgICAgNjMsXG4gICAgICAzMyxcbiAgICAgIDE3MSxcbiAgICAgIDE2MSxcbiAgICAgIDE3OSxcbiAgICAgIDExNyxcbiAgICAgIDY0LFxuICAgICAgMTgwLFxuICAgICAgMTMxLFxuICAgICAgMjUwLFxuICAgICAgMTc5LFxuICAgICAgMzksXG4gICAgICAxNTYsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAyMzQsXG4gICAgICAyMTIsXG4gICAgICAyMDEsXG4gICAgICAyMTgsXG4gICAgICAyMTksXG4gICAgICAxODQsXG4gICAgICA4MCxcbiAgICAgIDE1OSxcbiAgICAgIDI0OSxcbiAgICAgIDIxNyxcbiAgICAgIDIzMCxcbiAgICAgIDE4LFxuICAgICAgNjksXG4gICAgICA4NSxcbiAgICAgIDI0MyxcbiAgICAgIDIxMixcbiAgICAgIDI0MCxcbiAgICAgIDIwNixcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMVBWMTVTMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MzAzODE1MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzI3Mzg5MjIzNzM3NDozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFnZW50IExhcnJ5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3FRMGFnT0VJdVVtN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSVnA4RWthV2t0MnVjYVdnMWlaNmcwazdSOWRiVnZLcTRndW5OVnJXbG13PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVmV0hxSXVIcDE3cmNtKzhwMDVlczI5REFOallzUW9Dd3llV2VZeWhoRHJUZ3l1VmpPSDRqKys0VkI2TERrOEpCenJ5WWhtMEdOSFp4cnB0STlOUWl3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk4vNnVNWjBZMkxidVB6MzFsUURkM1VSNHRBckFWYmkxMjdEOEVscW1xV3VDZ2MyKyttTURLVGk5ajU3bnZkZ2JjQi9ncGdkZFNuU3lTZ2l2L0h0N2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTMwMzgxNTE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgwMTI0MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUk9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZSTy5qc29uIjogIntcImtleURhdGFcIjpcIm9uaDdDOFZlQmxoQ0k5R0JKMWpXWmd0MHE0UFlRT1gyeEZJUzV3ZEhWUzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzg0MzMxMTcyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MDEyNDMzMTU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
