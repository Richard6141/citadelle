import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/payment.js';

// Charger .env (en dev seulement, Render utilise les env vars directement)
if (process.env.NODE_ENV !== 'production') {
  const envPath = process.cwd() + '/.env';
  console.log('Loading .env from:', envPath);
  dotenv.config({ path: envPath });
}
console.log('API Key loaded:', process.env.NOWPAYMENTS_API_KEY ? 'Yes' : 'No');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS - autoriser le frontend (dev + production)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:8080',
  'https://citadelle.salanon.info',
  'http://citadelle.salanon.info',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/payment', paymentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
