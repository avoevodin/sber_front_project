const express = require('express')
const cors = require('cors')
const { postsRouter } = require('./routes/postsRouter')
const { commentsRouter } = require('./routes/commentsRouter')
const { PORT } = require('./settings')
const { authRouter } = require('./routes/authRouter')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/posts', postsRouter)
app.use('/api/v1/comments', commentsRouter)
app.use('/api/v1/auth', authRouter)

app.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})
