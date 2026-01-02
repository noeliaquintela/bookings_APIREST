const connection = require('./connections');

const savehotel = async (name, city, description) => {

    var sql = "INSERT INTO hotels (name, city, description) VALUES ('"+name+"', '"+city+"', '"+description+"')";
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

module.exports = savehotel;