const express = require('express')
const cors = require('cors')
const { postsRouter } = require('./routes/postsRouter')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})
