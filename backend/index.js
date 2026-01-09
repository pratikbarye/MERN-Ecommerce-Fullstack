const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');

const connectDB = require('./connectDB/connect');

const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const orderRoutes = require('./routes/orderRoute');
const paymentRoutes = require('./routes/paymentRoute');

const PORT = process.env.PORT || 8080;

/* =======================
   MIDDLEWARE
======================= */

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

/* =======================
   CORS (VERY IMPORTANT)
======================= */

app.use(
  cors({
    origin: [
      "https://mern-ecommerce-fullstack-fm2o76m67-pratik-baryes-projects.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);

/* =======================
   CLOUDINARY
======================= */

if (
  process.env.CLOUDINARY_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_SECRET_KEY
) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
  });
}

/* =======================
   ROUTES
======================= */

app.use('/api/v1/product', productRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/payment', paymentRoutes);

/* =======================
   TEST ROUTE
======================= */

app.get('/', (req, res) => {
  res.status(200).send('Backend is running successfully');
});

/* =======================
   START SERVER
======================= */

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
};

start();
