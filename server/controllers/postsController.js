const { v4: uuidv4 } = require('uuid')
const { db } = require('../DB')
const { options } = require('../settings')

const getPosts = (req, res) => {
  const dataForClient = db.posts
  res.json(dataForClient)
}

const createPost = (req, res) => {
  const dataFromClient = req.body

  if (!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)

  const newPost = {
    ...dataFromClient,
    id: uuidv4(),
    date: new Date().toLocaleDateString('ru-RU', options),
  }

  db.posts.push(newPost)
  return res.status(201).json(newPost)
}

const deletePost = (req, res) => {
  const { id } = req.params
  const index = db.posts.findIndex((post) => post.id === id)

  if (index > -1) {
    db.posts.splice(index, 1)
    return res.sendStatus(200)
  }

  return res.sendStatus(404)
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
}
