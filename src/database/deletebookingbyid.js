const connection = require('./connections');
const deletebookingbyid = async (id) => {
    try{
        const query = await connection.execute("DELETE FROM bookings where id="+id+"");
        return query;
    }
    catch (e)
    {
        console.log(e);
        return;
    }
};

module.exports = deletebookingbyid;