const zipafolder = require('zip-a-folder')
const fs = require('fs-extra')

function plusVersion(version) {
  const s = version.split('.')
  return `${s[0]}.${s[1]}.${Number(s[2]) + 1}`
}

async function start() {
  const version = fs.readFileSync('./version.txt').toString()
  const newVersion = plusVersion(version)
  fs.writeFileSync('./version.txt', newVersion)
  console.log('开始压缩文件')
  await zipafolder.zip(`./tempzip`, `./aurora-all-v${newVersion}.zip`)
  console.log('压缩包已生成')
  fs.removeSync('./tempzip')
}

start()