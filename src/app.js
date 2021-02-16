const express = require('express');
const app = express();
const phrases = require('./frases');

// Static files and template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Routes
app.get('*', (req,res) => {
    res.status(404).render('404', { message: phrases[Math.floor(Math.random() * phrases.length)] });
});

// Server
app.listen(3000, () => { 
    console.log('\x1b[7m\x1b[36m%s\x1b[0m','PROYECTO APIs de GIPHY');
    console.log('\x1b[36m%s\x1b[0m','Server ON!!! // Runing in por 3000');
                
});