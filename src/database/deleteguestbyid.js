const connection = require('./connections');
const deleteguestbyid = async (id) => {
    try{
        const query = await connection.execute("DELETE FROM guest where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = deleteguestbyid;