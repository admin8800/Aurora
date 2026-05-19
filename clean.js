const fs = require('fs-extra')

for (const dir of ['dist', 'tempzip']) {
  fs.removeSync(dir)
}

console.log('Cleaned old build artifacts')
