const express = require("express");
const { connectMOngoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");






const app = express();
const PORT = 3000;

// Load the Swagger YAML file
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Connect to MongoDB
connectMOngoDb("mongodb://127.0.0.1:27017/myapp");


// Middleware - Plugin
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"));



//Routes
app.use("/users", userRouter);



app.listen(PORT, () => console.log(`Server started at: ${PORT}`));