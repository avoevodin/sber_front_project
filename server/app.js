const express = require('express')
const cors = require('cors')
const { postsRouter } = require('./routes/postsRouter')
const { commentsRouter } = require('./routes/commentsRouter')
const { PORT } = require('./settings')
const { authRouter } = require('./routes/authRouter')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/posts', postsRouter)
app.use('/api/v1/comments', commentsRouter)
app.use('/api/v1/auth', authRouter)

app.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`)
})

// const db = require("../models");
// const config = require("../config/auth.config");
// const User = db.user;
// const Role = db.role;
// const Op = db.Sequelize.Op;
// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcryptjs");
// exports.signup = (req, res) => {
//   // Save User to Database
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8)
//   })
//     .then(user => {
//       if (req.body.roles) {
//         Role.findAll({
//           where: {
//             name: {
//               [Op.or]: req.body.roles
//             }
//           }
//         }).then(roles => {
//           user.setRoles(roles).then(() => {
//             res.send({ message: "User was registered successfully!" });
//           });
//         });
//       } else {
//         // user role = 1
//         user.setRoles([1]).then(() => {
//           res.send({ message: "User was registered successfully!" });
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };
// exports.signin = (req, res) => {
//   User.findOne({
//     where: {
//       username: req.body.username
//     }
//   })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }
//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }
//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });
//       var authorities = [];
//       user.getRoles().then(roles => {
//         for (let i = 0; i < roles.length; i++) {
//           authorities.push("ROLE_" + roles[i].name.toUpperCase());
//         }
//         res.status(200).send({
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           roles: authorities,
//           accessToken: token
//         });
//       });
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };
