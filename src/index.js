const express = require('express');
const app = express();
const morgan=require('morgan');
//
const cors = require('cors');

//Configuraciones
app.set('port', process.env.PORT || 3004);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With','Accept', 'x-client-key', 'x-client-secret', 'Authorization', 'x-api-key']
}));

//Routes
app.use(require('./routes/index'));


//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);

    function ahora()
    {
        var date = new Date()
        var userTimezoneOffset = date.getTimezoneOffset() * 60000;
        var parsedDate = new Date(date.getTime() - userTimezoneOffset)
        return parsedDate
    }
    
});
