import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/dashboard', (req, res) => {
  res.json({
    riskTrendData: [
      { date: '2023-01-01', riskScore: 80 },
      { date: '2023-02-01', riskScore: 70 }
    ]
  });
});

const vendors = [
  { id: 1, name: 'Vendor A', risk: 75 },
  { id: 2, name: 'Vendor B', risk: 60 }
];

app.get('/vendors', (req, res) => {
  res.json(vendors);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
