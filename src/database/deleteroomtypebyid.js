const connection = require('./connections');
const deleteroomtypebyid = async (id) => {
    try{
        const query = await connection.execute("DELETE FROM roomtypes where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = deleteroomtypebyid;