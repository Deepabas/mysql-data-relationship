const express = require('express');
const app = express()
const port = 5000;
const authRoutes = require('./src/components/userController/userRoute')
const addressRoutes = require('./src/components/addressController/route')
const moviesRoutes = require('./src/components/movieController/movieRoute')
const writersRoutes = require('./src/components/writerController/writerRoute')


app.use(express.urlencoded({ extended: true })); // New

app.use(express.json()); // New

//route middlewares
app.use('/', authRoutes)
app.use('/', addressRoutes)
app.use('/', moviesRoutes)
app.use('/', writersRoutes)

// app.post('/',(req,res)=>{
//     console.log(req.body)
// })

// Listen on environment port
app.listen(port, () => console.log(`Listening on port ${port}`))