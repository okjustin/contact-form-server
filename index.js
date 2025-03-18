import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/contact', (req, res) => {
  console.log('Received contact form submission:', req);

  console.log('Received contact form submission:', req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  setTimeout(() => {
    res.status(200).json({ message: 'Message sent successfully!' });
  }, 2000);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
