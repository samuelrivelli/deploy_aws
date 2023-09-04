const express = require('express');

const app = express()

app.get('/', (request,response) =>{
    return response.json({message:'Server is up'})
})

app.get('/atualizou', (request,response) =>{
    return response.json({message:'Atualizou'})
})

app.listen(3333)