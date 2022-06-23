const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'swapnil',
    password: 'cdac',
    database: 'node',
	port:3306
});


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



app.get('/getallItem', function (req, res) {
    
	conn.query('select * from book',[],(error,rows)=>{

		res.send(rows);

	});
});


	app.get("/addbooks",(req,res)=>{
		let input = {bookid:req.query.x,bookname:req.query.y,price:req.query.z};

		let output = true;

		conn.query("insert into book(bookid,bookname,price)values(?,?,?)",
		[input.bookid,input.bookname,input.price],(err,rows)=>{
			if(err){


			}
			else if(rows.affectedRows>0)
			{

				output=true;
			}

			res.send(output);

		});


	});


        
		
    








app.listen(8081, function () {
    console.log("server listening at port 8081...");
});