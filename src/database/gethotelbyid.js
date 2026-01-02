const { token } = require('morgan');
const connection = require('./connections');
const gethotelbyid = async (id) => {
    try{
        const [query] = await connection.execute("SELECT id, name, city, description FROM hotels where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = gethotelbyid;