const connection = require('./connections');
const getguestbyidbooking = async (id_booking) => {
    try{
        const [query] = await connection.execute("SELECT id, id_booking, photo, name, surname1, surname2, identity_number, suport_number  FROM guest where id_booking="+id_booking+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = getguestbyidbooking;