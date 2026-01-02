const connection = require('./connections');

const savebookings = async (id_hotel, start_date, end_date, room_type, number_guests) => {

    var sql = "INSERT INTO bookings (id_hotel, start_date, end_date, room_type, number_guests) VALUES ("+id_hotel+",'"+start_date+"', '"+end_date+"', "+room_type+", "+number_guests+")";
    try{
        const [result] = await connection.execute(sql, [
            id_hotel,
            start_date,
            end_date,
            room_type,
            number_guests
        ]);

        // result.insertId contiene el ID autogenerado
        return {
            ok: true,
            id: result.insertId
        };
    }
    catch (e)
    {
        console.log(e);
        return {
            ok: false,
            id: null
        };
    }
    
};

module.exports = savebookings;