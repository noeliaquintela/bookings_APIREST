const connection = require('./connections');
const getbookingsbyidhotel = async (id_hotel) => {
    try{
        const [query] = await connection.execute("SELECT id, id_hotel, start_date, end_date, room_type, number_guests  FROM bookings where id_hotel="+id_hotel+" ORDER BY start_date");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = getbookingsbyidhotel;