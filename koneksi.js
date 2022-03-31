import mysql from 'mysql';

// Buat Koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pakarKerja'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql  terkoneksi');
});

module.exports = conn;