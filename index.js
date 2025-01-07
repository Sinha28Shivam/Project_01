const express = require("express");
const { connectMOngoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const cors = require('cors');





const app = express();
const PORT = 3000;

// Load the Swagger YAML file
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// CORS Configuration
const corsOptions = {
    origin: ['http://localhost:3001'], // Allow requests from your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  app.use(cors(corsOptions));
  app.use(cors({ origin: '*' }));



// Connect to MongoDB
connectMOngoDb();


// Middleware - Plugin
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));



//Routes
app.use("/users", userRouter);



app.listen(PORT, () => console.log(`Server started at: ${PORT}`));