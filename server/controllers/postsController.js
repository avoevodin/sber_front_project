const { v4: uuidv4 } = require('uuid')
const { db } = require('../DB')
const { options } = require('../settings')

const getPosts = (req, res) => {
  const dataForClient = db.posts
  res.json(dataForClient)
}

const createPost = (req, res) => {
  const dataFromClient = req.body

  if (!dataFromClient
    || !Object.values(req.body).every((value) => !!value)) return res.sendStatus(400)

  const newPost = {
    ...dataFromClient,
    id: uuidv4(),
    date: new Date().toLocaleDateString('ru-RU', options),
  }

  db.posts.push(newPost)
  return res.status(201).json(newPost)
}

module.exports = {
  getPosts,
  createPost,
}
