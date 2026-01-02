//PRO ACADEMY
//TiDB Cloud (Requiere puerto 4000 y SSL Obligatorio)
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '3byG1oxoCRsn9yi.root',
    password: 'Ol2EYdtW5DlgXMyr',
    database: 'reserva_hotel_db',
    dateStrings: true,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    }
});

/*
//LOCAL
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'reserva_hotel_db',
    dateStrings: true
});
*/

/*
//PRO
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'cqesolutions',
    password: 'Noluda2026',
    database: 'reserva_hotel_db',
    dateStrings: true
});
*/
module.exports = connection;