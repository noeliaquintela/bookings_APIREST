const { token } = require('morgan');
const connection = require('./connections');
const gethotels = async () => {
    try{
        const [query] = await connection.execute("SELECT id, name, city, description FROM hotels");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = gethotels;