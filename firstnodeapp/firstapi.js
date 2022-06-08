const sql =  require('mssql');
const express =  require('express');
const app = express();

const config = {
    server : "DESKTOP-OS4SS2B",
    port:1433,
    user:"test123",
    password:"test1234",
    database:"AdventureWorks2019"  ,
    options :{
    trustedConnection: true,
    enableArithAbort : true,     
    trustServerCertificate: true,
    },
    connectionTimeout : 150000,
    pool :{
    max : 10,
    min : 0,
    idleTimeoutMillis: 30000,
    },
    };

//body Parse middleware
app.use(express.json());

app.get("/api/user/:id", function(req,res){
     sql.connect(config).then(pool=>{
        return   pool
        .request()  
        .input("AddressTypeID", sql.Int,parseInt( req.params.id))
        .query("select * from Person.AddressType where AddressTypeID =  @AddressTypeID");
      
      }).then(result =>{ 
          console.log(result.recordset[0] );
          res.status(200).json({
              result: result.recordset[0],
          });
          sql.close();
      }).catch(err => {
          console.log(err.message);
          sql.close();
      })

});

app.listen(3000, () =>{
    console.log("lisenting port 3000");
 } );