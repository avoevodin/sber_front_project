const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use()

app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}`)
})
