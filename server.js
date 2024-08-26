import express from 'express'
import { DATASETS_RESPONSE } from './responses.js'
import m from 'multer'
import 'dotenv/config'
import { writeToFile, addUpload, getUploads, getUpload, updateUpload } from './services/fileservice.js'
import { v1 } from 'uuid'
import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()

const multer = m()

const PORT = 3006

const __dirname = dirname(fileURLToPath(import.meta.url))

//serves files from the public folder
app.use('/public', express.static(path.join(__dirname, 'public')))

//get all datasets
app.get('/api/datasets', async (req, res) => {
  const uploads = await getUploads()
  res.send({
    data: {
      ...DATASETS_RESPONSE
    },
    uploads: {
      uploads
    }
  })
})

//get a single file
app.get('/api/dataset/:fileId', async (req, res) => {
  const { fileId } = req.params
  const upload = await getUpload(fileId)
  res.send({
    data: {
      upload
    }
  })
})

//accepts type {price: number, title: string, file: File}
//price is on PHP
//writes the file on disk, and returns the path to the file
app.post('/api/dataset/upload', multer.single('file'), async (req, res) => {
  const file = req.file
  const filePath = await writeToFile(file)
  const title = req.body.title
  const price = Number(req.body.price)
  const size = file.size
  const type = file.mimetype
  //store data related to the uploaded file
  const id = v1()
  const newObject = await addUpload({
    id,
    title,
    size,
    type,
    filePath,
    price,
    url: `http://localhost:${PORT}/${filePath}`,
    isBought: false
  })
  res.send({
    data: {
      newObject
    }
  })
})

//buy item kuno
app.patch('/api/dataset/buy/:fileId', async (req, res) => {
  const { fileId } = req.params
  const upload = await getUpload(fileId)
  upload.isBought = true
  await updateUpload(fileId, upload)
  res.send({
    data: {
      upload
    }
  })
})

//download item
//if not bought yet, return an error
app.get('/api/dataset/download/:fileId', async (req, res) => {
  const { fileId } = req.params
  const upload = await getUpload(fileId)
  if (!upload.isBought) {
    return res.status(403).send({
      error: 'You must buy the item first'
    })
  }
  res.download(upload.filePath)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
