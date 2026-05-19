const zipafolder = require('zip-a-folder')
const fs = require('fs-extra')

async function start() {
  const config = fs.readJsonSync('./public/config.json')
  if (!config.version) {
    throw new Error('public/config.json is missing "version"')
  }

  console.log('Creating combined package')
  await zipafolder.zip('./tempzip', `./aurora-all-v${config.version}.zip`)
  console.log('Combined package generated')
  fs.removeSync('./tempzip')
}

start().catch((err) => {
  console.error(err)
  process.exit(1)
})
