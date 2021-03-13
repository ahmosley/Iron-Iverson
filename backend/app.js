const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')


mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost/IronIverson', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to ${x.connections[0].name}`))
    .catch(() => console.error("Error connecting to Mongo"))



app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

app.use(express.json())


app.use(`/api`, require('./routes/routes'))




const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))