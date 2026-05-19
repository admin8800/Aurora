const JsConfuser = require('js-confuser')
const fs = require('fs-extra')
const path = require('path')
const zipafolder = require('zip-a-folder')

const themeConfigPath = './public/config.json'
const distConfigPath = './dist/config.json'
const distJsDir = './dist/static/js'
const tempZipDir = './tempzip'

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir).flatMap((name) => {
    const filePath = path.join(dir, name)
    const stat = fs.statSync(filePath)
    return stat.isDirectory() ? walkFiles(filePath) : [filePath]
  })
}

async function convert(str) {
  return JsConfuser.obfuscate(str, {
    target: 'browser',
    preset: 'medium',
    renameGlobals: false,
    stringCompression: false,
    lock: {
      antiDebug: false
    }
  })
}

function readThemeConfig() {
  const config = fs.readJsonSync(themeConfigPath)
  if (!config.name) {
    throw new Error('public/config.json is missing "name"')
  }
  if (!config.version) {
    throw new Error('public/config.json is missing "version"')
  }
  return config
}

function syncDistConfig(config) {
  if (!fs.existsSync('./dist')) {
    throw new Error('dist directory does not exist. Build must complete before packaging.')
  }
  fs.writeJsonSync(distConfigPath, config, { spaces: 2 })
}

function validateDist() {
  const requiredPaths = [distConfigPath, './dist/dashboard.blade.php', distJsDir]
  const missing = requiredPaths.filter((item) => !fs.existsSync(item))
  if (missing.length > 0) {
    throw new Error(`Build output is incomplete: ${missing.join(', ')}`)
  }
}

async function obfuscateAppBundle() {
  const files = walkFiles(distJsDir).filter((filePath) => path.basename(filePath).startsWith('app.') && filePath.endsWith('.js'))

  if (files.length === 0) {
    throw new Error('No app.*.js bundle found to obfuscate')
  }

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8')
    const newContent = await convert(content)
    fs.writeFileSync(filePath, newContent)
    console.log(`${filePath} obfuscated`)
  }
}

async function zipFiles(config) {
  fs.ensureDirSync(tempZipDir)
  const zipPath = `${tempZipDir}/${config.name}-v${config.version}.zip`
  await zipafolder.zip('./dist', zipPath)
  console.log(`Theme package generated: ${zipPath}`)
}

async function main() {
  const config = readThemeConfig()
  syncDistConfig(config)
  validateDist()
  await obfuscateAppBundle()
  await zipFiles(config)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
