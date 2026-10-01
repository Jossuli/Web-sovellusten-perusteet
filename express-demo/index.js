const express = require('express');
const app = express()
const port = 3000

app.use(express.json())
//Todot ovat muistissa ja kertovat, kun palvelin käynistetään uudestaan.
const todos = []

app.post('/todos',(req, res) => {
    console.log(req.body);
    res.send('Terve postista')
})

//reitissä suoritetaan http metodilla get pyynnön aikana sisältö
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/testi', (req, res) => {
  res.send('Terveiset testissä')
})

app.post('/posttesti',(req, res) => {
    res.send('Terve postista')
    })

//kuunellaan ja ilmoitetaan kuuntelu terminaalissa
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})