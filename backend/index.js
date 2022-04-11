const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: true
}))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mysqldata'
});

db.connect(function(err){
   if(err) throw err;
   console.log('Database connected'); 
});

app.get('/employee', (req,res) => {
    
   console.log(req.query.id)
    //Return employee id entered to verify login on react
    var statement = 'SELECT * FROM employeedetails WHERE EmployeeID=' + req.query.id + ';'

    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });

});

app.get('/recomendation', (req,res) => {
    console.log("IN")
    console.log("Line+ "+req.query.name)
     var statement = 'SELECT name FROM videogame WHERE genrename = (SELECT genrename FROM videogame WHERE itemid = (SELECT itemid FROM quantity WHERE orderid = (SELECT orderid FROM (SELECT * FROM sales WHERE customerid = (SELECT customerid FROM customer WHERE name = '+'"'+req.query.name+'"' +'AND phonenumber = '+req.query.phone+')) AS orders ORDER BY date DESC LIMIT 1))) ORDER BY Rand() LIMIT 1;'           
 
     db.query(statement, 
         (error,rows,fields) =>
     {
        
        res.json(rows);
         
     });
 
 });



 app.get('/TopGenre', (req,res) => {
    
    var statement = ' SELECT Name,MAX(revenue) FROM videogame v, quantity q, sales s WHERE v.GenreName = '+'"' + req.query.genre+'"' +' AND v.itemID =q.itemID AND q.orderID = s.orderID;'
    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });

});


app.get('/TotalRevenue', (req,res) => {

    const branchID = req.query.branchID;
    const startTime = req.query.startTime;
    const endTime = req.query.endTime;
    console.log(branchID);
    console.log(startTime);
    console.log(endTime);


    
    var statement = `SELECT * FROM sales WHERE date > '${startTime}' and date < '${endTime}' AND branchID = ${branchID}`       


    db.query(statement, 
        (error,rows,fields) =>
    {
       // console.log(error);
        //console.log(rows);
        //console.log(fields);
        res.json(rows);
        
    });

});


app.get('/TotalRevenuePerYear', (req,res) => {
    const year = req.query.year;    
    
    var statement = 'SELECT SUM(Revenue) FROM quantity a, sales b WHERE a.orderID = b.orderID AND a.itemID IN (Select ItemID FROM videogame WHERE releaseDate = ' + req.query.year +');'

    db.query(statement, 
        (error,rows,fields) =>
    {
       res.json(rows);
        
    });

});


app.get('/InsertAds', (req,res) => {
    
    let date=req.query.date.split("-")
    let date1= new Date(date[0],date[1],date[2]);

    var statement = 'INSERT INTO advert VALUES(15,(SELECT BranchID FROM branch WHERE BranchID='+req.query.branch+' ),' +'"'+ req.query.header +'"'+',' + req.query.payment +', '+'"'+(date1.getFullYear()+'-'+date1.getMonth()+'-'+date1.getDay())+'"'+');'


    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });

});
app.get('/BranchGames', (req,res) => {
    
    var statement = 'SELECT Name FROM videogame v, quantity q,sales s WHERE s.branchID = 1 AND s.orderID = q.orderID AND q.itemID = v.ItemID;'

    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });

});
app.get('/VideoAdRevenue', (req,res) => {
    
    var statement = 'SELECT j.branchID, j.VideoGameRevenue, h.AdvertRevenue FROM (SELECT s.branchID, SUM(s.revenue) as VideoGameRevenue FROM sales as s GROUP BY s.branchID)j JOIN (SELECT a.branchID, SUM(a.PaymentReceived) as AdvertRevenue FROM advert as a GROUP BY a.branchID )h ON j.branchID=h.branchID;'

    db.query(statement, 
        (error,rows,fields) =>
    {
      
        res.json(rows);
        
    });

});
app.get('/addEmployeeAddress', (req,res) => {
    
    console.log(typeof req.query.name)
    console.log(req.query.address)
    var statement = 'INSERT INTO employeeaddress VALUES("'+req.query.name+'","'+req.query.address+'");'

    db.query(statement, 
        (error,rows,fields) =>
    {   
        console.log("AddedEmployeeAddressss")

        
    });
    var statement2 = 'INSERT INTO employeedetails VALUES ('+req.query.employeeID+',(SELECT Address FROM employeeaddress WHERE Name="'+req.query.name+'" ), (SELECT BranchID FROM branch WHERE BranchID='+req.query.branch+' ));'
    

    db.query(statement2, 
        (error,rows,fields) =>
    {   
        console.log("AddedEmployee")
     
        
    });
});

app.get('/updateStock', (req,res) => {
    
    console.log(req.query.amount) 
   console.log(req.query.items)


    var statement = 'UPDATE stock SET  stockAmmount = (stockAmmount+'+req.query.amount+') WHERE itemID = (SELECT itemID FROM videogame WHERE name ='+ '"' +req.query.items+'"'+');'

    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log("Updated Stock")
        res.json(rows);
        
    });

});


app.get('/gamePerGenre', (req,res) => {
    
    var statement = 'SELECT name, price FROM videogame WHERE GenreName = '+'"' + req.query.genre+'"' +';'

    db.query(statement, 
        (error,rows,fields) =>
    {
        console.log("GamesGenere")
        res.json(rows);
        
    });

});





app.get('/addCustomer', (req,res) => {
    
    console.log(req.query.name)
    console.log(req.query.number)
    var statement = 'INSERT INTO customername VALUES('+req.query.customerID+','+req.query.branch+');'
    db.query(statement, 
        (error,rows,fields) =>
    {   
        console.log("AddedCustomer1")
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });
    var statement2 = 'INSERT INTO customer VALUES ("'+req.query.number+'" ,"'+  req.query.name +'" ,'+req.query.customerID+' );'


    db.query(statement2, 
        (error,rows,fields) =>
    {   
        console.log("AddedCustomer2")
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.json(rows);
        
    });
});







app.listen(3033);