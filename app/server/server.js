const app = require('express')();

app.get('/', (req, res) => {
    res.send("Root of Neito's first AKS WebApp").end();
})

app.get('/hello', (req, res) => {
    res.send("").end();    
})

app.listen(5000, () => {
    console.log("Server listening on port 5000");  
})