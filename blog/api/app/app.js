import express from 'express';

const app = express();

app.use(express.static('public'));

const posts = [
  {
    id: 1, title: "tytul1", text: "Text1"
  },
  {
    id: 2, title: "tytul2", text: "Text2"
  },
  {
    id: 3, title: "tytul3", text: "Text3"
  }
];

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.listen(3000, function () {
  console.log('Server is running!');
});
