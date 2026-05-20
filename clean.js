const fs = require('fs')

for (const dir of ['dist', 'tempzip']) {
  fs.rmSync(dir, { recursive: true, force: true })
}

console.log('Cleaned old build artifacts')
