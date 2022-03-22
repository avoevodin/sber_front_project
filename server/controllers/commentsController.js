const { v4: uuidv4 } = require('uuid')
const { db } = require('../DB')
const { options } = require('../settings')

const getComments = (req, res) => {
  const { postId } = req.params
  const dataForClient = db.comments.filter((comment) => comment.postId === postId)
  res.json(dataForClient)
}

const createComment = (req, res) => {
  const dataFromClient = req.body

  if (!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)
  const newComment = {
    ...dataFromClient,
    id: uuidv4(),
    date: new Date().toLocaleDateString('ru-RU', options),
  }

  db.comments.push(newComment)
  return res.status(201).json(newComment)
}

const deleteComment = (req, res) => {
  const { id } = req.params
  const index = db.comments.findIndex((comment) => comment.id === id)

  if (index > -1) {
    const { postId } = db.comments[index]
    db.comments.splice(index, 1)
    return res.status(200).json(db.comments.filter((comment) => comment.postId === postId))
  }

  return res.sendStatus(404)
}

const deleteCommentsByPost = (req, res) => {
  const { postId } = req.params
  db.comments = db.comments.filter((comment) => comment.postId !== postId)
  return res.sendStatus(200)
}

module.exports = {
  getComments,
  createComment,
  deleteComment,
  deleteCommentsByPost,
}
