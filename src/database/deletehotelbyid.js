const connection = require('./connections');
const deletehotelbyid = async (id) => {
    try{
        const query = await connection.execute("DELETE FROM hotels where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = deletehotelbyid;