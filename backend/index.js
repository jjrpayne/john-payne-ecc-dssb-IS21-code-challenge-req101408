const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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

app.use("/", require("./routes/products"));

app.get('/api/', (req, res) => {
    res.send('Hello World!');
})
// health check
app.get('/api/health/', (req, res) => {
    res.status(200).send("Server is healthy.");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
