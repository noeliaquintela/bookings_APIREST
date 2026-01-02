const connection = require('./connections');

const saveguest = async (id_booking, photo, name, surname1, surname2, identity_number, suport_number) => {

    var sql = "INSERT INTO guest (id_booking, photo, name, surname1, surname2, identity_number, suport_number) VALUES ("+id_booking+", '"+photo+"', '"+name+"', '"+surname1+"', '"+surname2+"', '"+identity_number+"', '"+suport_number+"')";
    try{
        const [result] = await connection.execute(sql);
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

module.exports = saveguest;