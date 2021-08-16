const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello World!')
});

app.use('/about',express.static('./about.html'))

app.listen(port,()=>{
    console.log(`port${port} is active`)
})