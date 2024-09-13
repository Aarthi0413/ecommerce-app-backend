// const express = require("express");
// const cors = require("cors");
// const cookieParser = require('cookie-parser');
// require("dotenv").config();
// const connectDB = require("./config/db");
// const router = require("./routes/index");

// const app = express();
// app.use(cors(
//   {
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//   }
// ));
// app.use(express.json());
// app.use(cookieParser());

// app.use("/api", router);

// console.log("front end url", process.env.FRONTEND_URL)

// connectDB()
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index");

const app = express();

// Define CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL || origin === 'http://localhost:3000' || origin === 'http://localhost:3001') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

console.log("front end url", process.env.FRONTEND_URL);

connectDB()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
