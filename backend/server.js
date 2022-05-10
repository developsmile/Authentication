const express = require('express');
const app = express();
const port = process.env.PORT || 4000
const userRouter = require('./routes/userRoutes');
app.use(express.json())
app.use(userRouter);


app.listen(port,(req,res)=>{
    console.log("Server started on port 4000..");
})
