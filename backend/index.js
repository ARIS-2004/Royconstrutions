import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const projects = [
  {
    id: 1,
    title: 'Skyline Corporate Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1672072830247-85ac23671e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzc0NDk5MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A 50,000 sq ft state-of-the-art office complex in the heart of the city.',
  },
  {
    id: 2,
    title: 'Prestige Residences',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1612945533382-4ae1f539654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzc0NDk5MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '30-story luxury residential tower with panoramic city views.',
  },
  {
    id: 3,
    title: 'Metro Industrial Hub',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzc0NDk5MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Large-scale manufacturing and warehouse complex built for the future.',
  },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  console.log(`[Contact] ${name} <${email}>: ${message}`);
  res.json({ success: true, message: 'Thank you! We will be in touch shortly.' });
});

app.listen(PORT, () => {
  console.log(`Roy Constructions API → http://localhost:${PORT}`);
});
