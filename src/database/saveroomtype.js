const connection = require('./connections');

const saveroomtype = async (id_hotel, description) => {

    var sql = "INSERT INTO roomtypes (id_hotel, description) VALUES ("+id_hotel+", '"+description+"')";
    try{
        await connection.execute(sql);
        return true;
    }
    catch (e)
    {
        console.log(e);
        return false;
    }
    
};

module.exports = saveroomtype;