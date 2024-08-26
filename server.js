import express from 'express'
import { DATASETS_RESPONSE } from './responses.js'

const app = express()

const PORT = 3006

// Middleware to disable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS') // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') // Allow specific headers
  next()
})

app.get('/api', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.get('/api/datasets', (req, res) => {
  res.send({
    data: {
      ...DATASETS_RESPONSE
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
