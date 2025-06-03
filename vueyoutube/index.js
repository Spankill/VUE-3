const express = require('express');
const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'YOUTUBE',
});


connection.connect();

const app = express();
app.use(express.json());
app.use('/', express.static('public'));

app.post('/data', (req, res) => {
    const fecha = req.body.fecha.substring(0, req.body.fecha.indexOf('T'));

    const sql = "SELECT" +
                "DATE_FORMAT (insert_date, '%Y - %m-%d') AS d, " +
                " AVG(price) as pl"+
                "FROM youtube.renfe"+

                "WHERE start_date >= '" +fecha+" 00:00:00' AND start_date <='"+fecha+" 23:59:59' AND"+
                "origin = 'BARCELONA' AND"+
                "destination = 'MADRID' AND"+
                "price<> ''"+
                "GROUP BY DATE_FORMAT(insert_date, '%y-%m-%d')"+
                "ORDER BY insert_date DESC";

    connection.query(sql, function (err,rows,fields){
        const datos = {
            label:[],
            datasets: [
                {
                    label:'Media',
                    data: [],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860'
                }
            ]
        };
        for (const i=0; i < rows.length; i++) {
            datos.labels.push(rows[i],d);
            datos.datasets[0].data.push(rows[i].pl);
        }
        res.send(datos);
    } );
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})