const connection = require('./connections');
const getbookingbyid = async (id) => {
    try{
        const [query] = await connection.execute("SELECT id, id_hotel, start_date, end_date, room_type, number_guests  FROM bookings where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = getbookingbyid;