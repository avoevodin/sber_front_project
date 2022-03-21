const { options } = require('./settings')

const db = {
  posts: [
    {
      id: '1',
      title: 'Dooh!',
      text: 'Why you little!',
      hashtag: '#doh',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      date: new Date().toLocaleDateString('ru-RU', options),
    },
    {
      id: '2',
      title: 'Eat My Shorts!',
      text: 'I\'m Bart Simpson,\nWho the Hell are You?',
      hashtag: '#caramba',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
      date: new Date().toLocaleDateString('ru-RU', options),
    },
    {
      id: '3',
      title: 'Quit it, Bart!',
      text: 'If anyone wants me,\nI\'ll be in my room.',
      hashtag: '#BAAAAAART',
      image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png',
      date: new Date().toLocaleDateString('ru-RU', options),
    },
    {
      id: '4',
      title: 'Oh, Homie.',
      text: 'You have no idea what it\'s like,\nbeing married to you.',
      hashtag: '#mmmmm',
      image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
      date: new Date().toLocaleDateString('ru-RU', options),
    },
  ],
}

module.exports = {
  db,
}
