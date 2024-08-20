import express from 'express'
import { DATASETS_RESPONSE } from './responses.js'

const app = express()

const PORT = 3006

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
