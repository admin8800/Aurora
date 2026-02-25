const JsConfuser = require('js-confuser')
const fs = require('fs-extra')
const walkjs = require('@nodelib/fs.walk')
const path = require('path')
const zipafolder = require('zip-a-folder')

function walk() {
  walkjs.walk('./dist/static/js', async (err, entries) => {
    if (err) {
      console.log(err)
      return
    }

    for (let i = 0; i < entries.length; i++) {
      const item = entries[i]

      if (item.dirent.isFile()) {
        const url = item.path
        const filename = path.basename(url)
        // console.log(url)
        if (filename.startsWith('app.')) {
          const content = fs.readFileSync(url).toString()
          const newContent = await convert(content)
          fs.writeFileSync(url, newContent)
          console.log(url + '编译结束')
        }
      }
    }

    console.log('编译成功！')
    zipfiles()
  })
}

async function convert(str) {
  const res = await JsConfuser.obfuscate(str, {
    target: 'browser',
    preset: 'medium',
    renameGlobals: false,
    stringCompression: false,
    lock: {
      antiDebug: false
    }
  })
  return res
}

function plusVersion(version) {
  const s = version.split('.')
  return `${s[0]}.${s[1]}.${Number(s[2]) + 1}`
}

function changeConfig() {
  const version = fs.readFileSync('./version.txt').toString()
  const config = JSON.parse(fs.readFileSync(`./public/config.json`).toString())

  config.version = plusVersion(version)

  fs.writeFileSync(`./public/config.json`, JSON.stringify(config, null, 2))
  fs.writeFileSync(`./dist/config.json`, JSON.stringify(config, null, 2))

  return config
}

async function zipfiles() {
  const config = changeConfig()

  if (!fs.existsSync('./tempzip')) {
    fs.mkdirSync('./tempzip')
  }

  console.log('开始压缩文件')
  await zipafolder.zip(`./dist`, `./tempzip/${config.name}-v${config.version}.zip`)
  console.log('压缩包已生成')
}

walk()
