import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import axios from 'axios'
import { load as loadHtml } from 'cheerio'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://www.3d-laser.pl'
const OUTPUT_DIR = path.resolve(__dirname, '..', 'public', 'images')

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true })
}

function toAbsoluteUrl(url) {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  if (url.startsWith('//')) return `https:${url}`
  if (url.startsWith('/')) return `${BASE_URL}${url}`
  return `${BASE_URL}/${url}`
}

function sanitizeFilename(url) {
  const parsed = new URL(url)
  let filename = path.basename(parsed.pathname)
  if (!filename || filename === '/' || !filename.includes('.')) {
    const segments = parsed.pathname.split('/').filter(Boolean)
    filename = (segments.pop() || 'image') + '.jpg'
  }
  filename = filename.split('?')[0]
  if (filename.length > 80) {
    const ext = path.extname(filename)
    filename = filename.slice(0, 80 - ext.length) + ext
  }
  return filename
}

function isImageUrl(url) {
  return /(\.png|\.jpg|\.jpeg|\.webp|\.gif|\.svg)(\?.*)?$/i.test(url)
}

async function downloadFile(url, destPath) {
  const response = await axios.get(url, { responseType: 'stream', timeout: 30000 })
  await new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(destPath)
    response.data.pipe(writer)
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

async function fetchAndDownloadImages() {
  await ensureDir(OUTPUT_DIR)
  const { data: html } = await axios.get(BASE_URL, { timeout: 30000 })
  const $ = loadHtml(html)

  const urls = new Set()

  $('img').each((_, img) => {
    const src = $(img).attr('src') || $(img).attr('data-src')
    const abs = toAbsoluteUrl(src)
    if (abs && isImageUrl(abs)) urls.add(abs)
    const srcset = $(img).attr('srcset')
    if (srcset) {
      srcset.split(',').forEach(part => {
        const u = part.trim().split(' ')[0]
        const abs2 = toAbsoluteUrl(u)
        if (abs2 && isImageUrl(abs2)) urls.add(abs2)
      })
    }
  })

  $('[style]').each((_, el) => {
    const style = $(el).attr('style') || ''
    const match = style.match(/url\(([^)]+)\)/i)
    if (match) {
      const raw = match[1].replace(/['"]/g, '')
      const abs = toAbsoluteUrl(raw)
      if (abs && isImageUrl(abs)) urls.add(abs)
    }
  })

  const uniqueUrls = Array.from(urls)
  console.log(`Found ${uniqueUrls.length} image URLs`)

  const results = []
  for (const url of uniqueUrls) {
    try {
      const filename = sanitizeFilename(url)
      const dest = path.join(OUTPUT_DIR, filename)
      if (fs.existsSync(dest)) {
        results.push({ url, filename, status: 'skipped (exists)' })
        continue
      }
      await downloadFile(url, dest)
      results.push({ url, filename, status: 'downloaded' })
      console.log(`Downloaded: ${filename}`)
    } catch (err) {
      results.push({ url, error: String(err), status: 'failed' })
      console.warn(`Failed: ${url}`, err.message)
    }
  }

  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json')
  await fs.promises.writeFile(manifestPath, JSON.stringify(results, null, 2), 'utf8')
  console.log(`Wrote manifest: ${manifestPath}`)
}

fetchAndDownloadImages().catch(err => {
  console.error(err)
  process.exit(1)
})
