const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "ECC Product API",
        version: "1.0.0",
        description:
          "This is an API that keeps track of products for the BC Ministry of Education and Child Care",
        contact: {
          name: "John Payne",
          email: "jjrpayne@hotmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
};

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

router = express.Router();
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const specs = swaggerJsdoc(options);
app.use(
    "/api/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use("/", require("./routes/general"))
app.use("/", require("./routes/products"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
