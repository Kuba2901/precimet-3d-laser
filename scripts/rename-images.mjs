import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMAGES_DIR = path.resolve(__dirname, '..', 'public', 'images')

const renameMap = {
  // Laser cutting machines
  'ddb4db_2c40266c9f794e5eb91d69064603e926f000.jpg': 'mazak-fiber-laser.jpg',
  'ddb4db_7bfd0ba477f74c13adbbfcdcfbfd9a19~mv2.webp': 'prima-laser-3d.jpg',
  
  // Press machines
  '11062b_f85936f5a28b42f3bb446c9ba5848a38~mv2.jpg': 'safan-darley-press.jpg',
  
  // Machining centers
  '11062b_ca7ce0a21093407bb75dca0dab6c519c~mv2.jpeg': 'doosan-vertical-machining.jpg',
  'ddb4db_e68e970325644646981122471245f0bf~mv2.webp': 'doosan-horizontal-machining.jpg',
  'ddb4db_a341301ac43f4d57a94169a77e80b52d~mv2.webp': 'avia-machining-center.jpg',
  'ddb4db_010bb661c7e54fed889ad22bddde391e~mv2.webp': 'romi-machining-center.jpg',
  
  // Cutting and bending machines
  'ddb4db_cc1219d5b4914855880ea38696022eed~mv2.webp': 'cutting-machine-ukosowanie.jpg',
  'ddb4db_25fe70d3cda94999893715bda793ae51~mv2.webp': 'tube-profile-bender.jpg',
  
  // Welding and automation
  'ddb4db_0e3798a191274b51a66253572aa21e84~mv2.webp': 'otc-daihen-welding-robot.jpg',
  
  // Additional machinery images
  'ddb4db_3bbd9d8934c74a7c90a368af0575ddd7~mv2.png': 'machinery-overview.png',
  'ddb4db_23d1c5b66a3949b1b0424b91634434c1~mv2.png': 'production-facility.png',
  'ddb4db_92b2e2b0a77a470cbf7d10eb2fe16794~mv2.png': 'workshop-interior.png',
  'ddb4db_ca09259dbc8a44f2ab828b25aa5a1eae~mv2.webp': 'equipment-detail.webp'
}

async function renameImages() {
  console.log('Renaming images to descriptive names...')
  
  for (const [oldName, newName] of Object.entries(renameMap)) {
    const oldPath = path.join(IMAGES_DIR, oldName)
    const newPath = path.join(IMAGES_DIR, newName)
    
    if (fs.existsSync(oldPath)) {
      try {
        fs.renameSync(oldPath, newPath)
        console.log(`✓ ${oldName} → ${newName}`)
      } catch (err) {
        console.error(`✗ Failed to rename ${oldName}:`, err.message)
      }
    } else {
      console.warn(`⚠ File not found: ${oldName}`)
    }
  }
  
  console.log('\nRenaming complete!')
  
  // List final files
  const files = fs.readdirSync(IMAGES_DIR).filter(f => !f.endsWith('.json'))
  console.log('\nFinal image files:')
  files.forEach(file => console.log(`  - ${file}`))
}

renameImages().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
