const { Router, text } = require('express');
//const console = require('../utils/logger').console;
const router = Router();

 
//GET
router.get('/test', async (req, res) => {    
    console.log(req.body);  
    console.log("Test")  

    res.status(200).json(
        {
            "Resultado" : "Prueba OK"         
        }
    );    
})

router.get('/hotels', async (req, res) => {    
    console.log(req.body);  
    
    const gethotels = require('../database/gethotels');

    const query = await gethotels();

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var hoteles = [];
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado hoteles";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Hoteles recuperados correctamente";
            
            // Construimos un array con todos los hoteles
            hoteles = query.map(h => ({
                id: h.id,
                name: h.name,
                city: h.city,
                description: h.description
            }));            
        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Hoteles" : hoteles
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})


//POST
router.post('/savehotel', async (req, res) => {    
    console.log(req.body);     

    const savehotel = require('../database/savehotel');
    const savedOK = await savehotel(req.body.name, req.body.city, req.body.description);    
    if(savedOK)
    {
        res.status(201).json(
            {
                "Resultado": "Hotel creado correctamente.",
            }
        );
    }
    else{
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al crear el hotel."
            }
        );
    }

})

router.post('/hotelbyid', async (req, res) => {    
    console.log(req.body);  
    
    const gethotelbyid = require('../database/gethotelbyid');

    const query = await gethotelbyid(req.body.id)

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var hotel = "";
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado el hotel";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Hoteles recuperados correctamente";
            
            // Construimos un array con todos los hoteles
            hotel = 
            {
                "name": query[0].name, 
                "city": query[0].city, 
                "description": query[0].description
            }     
        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Hotel" : hotel
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})

router.post('/saveroomtype', async (req, res) => {    
    console.log(req.body);     

    const saveroomtype = require('../database/saveroomtype');
    const savedOK = await saveroomtype(req.body.id_hotel, req.body.description);    
    if(savedOK)
    {
        res.status(201).json(
            {
                "Resultado": "Tipo de habitación creado correctamente.",
            }
        );
    }
    else{
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error a crear el tipo de habitación."
            }
        );
    }

})

router.post('/roomtypesbyhotelid', async (req, res) => {    
    console.log(req.body);  
    
    const getroomtypesbyhotelid = require('../database/getroomtypesbyhotelid');

    const query = await getroomtypesbyhotelid(req.body.id_hotel);

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var tiposhabitacion = [];
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado tipos de habitación en este hotel";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Tipos de habitaciones recuperados correctamente";
            
            // Construimos un array con todos los tipos de habitación
            tiposhabitacion = query.map(h => ({
                id: h.id,
                id_hotel: h.id_hotel,
                description: h.description
            }));            
        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "TiposHabitacion" : tiposhabitacion
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})

router.post('/bookingbyid', async (req, res) => {    
    console.log(req.body);  
    
    const getbookingbyid = require('../database/getbookingbyid');

    const query = await getbookingbyid(req.body.id)

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var reserva = "";
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado la reserva";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Reserva recuperada correctamente";
            
            reserva = 
            {
                "id": query[0].id, 
                "id_hotel": query[0].id_hotel, 
                "start_date": query[0].start_date,
                "end_date": query[0].end_date,
                "room_type": query[0].room_type,
                "number_guests": query[0].number_guests
            }     
        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Reserva" : reserva
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})

router.post('/bookingsbyidhotel', async (req, res) => {    
    console.log(req.body);  
    
    const getbookingsbyidhotel = require('../database/getbookingsbyidhotel');

    const query = await getbookingsbyidhotel(req.body.id)

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var reservas = [];
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado reservas para ese hotel";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Reservas recuperadas correctamente";
            
            reservas = query.map(r => ({
                id: r.id,
                id_hotel: r.id_hotel,
                start_date: r.start_date,
                end_date: r.end_date,
                room_type: r.room_type,
                number_guests: r.number_guests                
            }));      

        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Reservas" : reservas
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})

router.post('/savebooking', async (req, res) => {    
    console.log(req.body);     

    const savebooking = require('../database/savebooking');
    const result = await savebooking(req.body.id_hotel, req.body.start_date, req.body.end_date, req.body.room_type, req.body.number_guests);    
    if(result.ok)
    {
        res.status(201).json(
            {
                "Resultado": "Reserva creada correctamente.",
                "IdReserva": result.id
            }
        );
    }
    else{
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al crear la reserva."
            }
        );
    }

})

router.post('/saveguest', async (req, res) => {    
    console.log(req.body);     

    const saveguest = require('../database/saveguest');
    const result = await saveguest(req.body.id_booking, req.body.photo, req.body.name, req.body.surname1, req.body.surname2, req.body.identity_number, req.body.suport_number);    
    if(result.ok)
    {
        res.status(201).json(
            {
                "Resultado": "Datos de huesped creados correctamente.",
                "IdHuesped": result.id
            }
        );
    }
    else{
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al crear los datos del huesped."
            }
        );
    }

})

router.post('/guestbyid', async (req, res) => {    
    console.log(req.body);  
    
    const getguestbyid = require('../database/getguestbyid');

    const query = await getguestbyid(req.body.id)

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var huesped = "";
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado el huesped";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Huesped recuperado correctamente";
            
            huesped = 
            {
                "id": query[0].id, 
                "id_booking": query[0].id_booking, 
                "photo": query[0].photo,
                "name": query[0].name,
                "surname1": query[0].surname1,
                "surname2": query[0].surname2,
                "identity_number": query[0].identity_number,
                "suport_number": query[0].suport_number
            }     
        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Huesped" : huesped
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})

router.post('/guestbyidbooking', async (req, res) => {    
    console.log(req.body);  
    
    const getguestbyidbooking = require('../database/getguestbyidbooking');

    const query = await getguestbyidbooking(req.body.id)

    if(query)
    {
        var textoResultado = "";
        var codigoResultado = -1;
        var huespedes = [];
        if(query.length == 0)
        {
            codigoResultado = -1;
            textoResultado = "No se han encontrado huéspedes para esta reserva";
        }
        else{
            
            codigoResultado = 1;
            textoResultado = "Huéspedes recuperadas correctamente";
            
            huespedes = query.map(r => ({
                id: r.id,
                id_booking: r.id_booking,
                photo: r.photo,
                name: r.name,
                surname1: r.surname1,
                surname2: r.surname2,
                identity_number: r.identity_number,
                suport_number: r.suport_number,                
            }));      

        }
        
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado,
                "Huespedes" : huespedes
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al realizar la consulta."
            }
        ); 
    }
})


//DELETE
router.delete('/hotelbyid', async (req, res) => {    
    console.log(req.body);  
    
    const deletehotelbyid = require('../database/deletehotelbyid');

    const query = await deletehotelbyid(req.body.id)

    if(query)
    {           
        codigoResultado = 1;
        textoResultado = "Se ha borrado correctamente el hotel";
                    
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al borrar el hotel."
            }
        ); 
    }
})

router.delete('/roomtypebybyid', async (req, res) => {    
    console.log(req.body);  
    
    const deleteroomtypebyid = require('../database/deleteroomtypebyid');

    const query = await deleteroomtypebyid(req.body.id)

    if(query)
    {           
        codigoResultado = 1;
        textoResultado = "Se ha borrado correctamente el tipo de habitación";
                    
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al borrar el tipo de habitación"
            }
        ); 
    }
})

router.delete('/bookingbyid', async (req, res) => {    
    console.log(req.body);  
    
    const deletebookingbyid = require('../database/deletebookingbyid');

    const query = await deletebookingbyid(req.body.id)

    if(query)
    {           
        codigoResultado = 1;
        textoResultado = "Se ha borrado correctamente la reserva";
                    
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al borrar la reserva"
            }
        ); 
    }
})

router.delete('/guestbyid', async (req, res) => {    
    console.log(req.body);  
    
    const deleteguestbyid = require('../database/deleteguestbyid');

    const query = await deleteguestbyid(req.body.id)

    if(query)
    {           
        codigoResultado = 1;
        textoResultado = "Se ha borrado correctamente el usuario de la reserva";
                    
        res.status(200).json(
            {
                "Codigo" : codigoResultado,
                "Resultado" : textoResultado
            }
        );    
    }
    else
    {
        res.status(500).json(
            {
                "Resultado": "Se ha producido un error al borrar el usuario de la reserva"
            }
        ); 
    }
})

module.exports = router;