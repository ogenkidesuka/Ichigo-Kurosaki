/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6283894435611','0','0']
global.ownerName = 'Tn-Vams'
global.packname = 'VAms'
global.author = 'Tn_error'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'session'

//Message Nya Ubah Disini
global.mess = {
admin: 'lol You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'bruhh You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading...',
done: 'Done!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
