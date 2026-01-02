const connection = require('./connections');
const getguestbyid = async (id) => {
    try{
        const [query] = await connection.execute("SELECT id, id_booking, photo, name, surname1, surname2, identity_number, suport_number  FROM guest where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = getguestbyid;