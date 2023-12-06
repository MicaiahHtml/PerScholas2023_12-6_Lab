// Load express
const express = require('express');
const eightBallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
// Create our express app
const app = express();

app.get('/magic', (req, res) => {
    res.send("w h a t  i s  y o u r  w i s h ?")
})

app.get('/magic/:question', (req, res) => {
    // req.params.question.replace(/%20/g, " ");
    res.send(
        `<h2>${req.params.question}</h2> 
        <h1>${eightBallResponses[Math.floor(Math.random()*eightBallResponses.length)]}</h1>`
        )
})

app.get('/greetings', (req, res) => {
    res.send("Hello, stranger.")
})

app.get('/greetings/:name', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.name}.</h1>`)
})

app.get('/tip/:total/:tip', (req, res) => {
    res.send(`<h1>${req.params.total*(req.params.tip)/100}</h1>`)
})


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Pages: greetings, tip, magic</h1>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});