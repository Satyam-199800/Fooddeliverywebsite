const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3005;
app.use(cors());

app.use(express.json());

const product = require("../Backend/Routes/productRoutes");
const user = require("../Backend/Routes/userRoutes");
mongoose
.connect("mongodb+srv://naruto0648:WcI32GJ8sXCNWavp@cluster0.4p6htlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connected"));

app.use('/api', product);
app.use('/api', user);

app.listen(port, () => {
    console.log('Example app listening on port {port}'); 
});
