const { token } = require('morgan');
const connection = require('./connections');
const getroomtypesbyhotelid = async (id_hotel) => {
    try{
        const [query] = await connection.execute("SELECT id, id_hotel, description FROM roomtypes where id_hotel="+id_hotel+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = getroomtypesbyhotelid;