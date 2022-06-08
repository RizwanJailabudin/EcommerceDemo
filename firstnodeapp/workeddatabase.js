const sql = require('mssql');

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

sql.on('error',err => {
console.log(err.message);
});

async function getdbuserasyncfunction(){
try{
let pool = await sql.connect(config)
let result1 = await pool
                    .request()
                    .input("AddressTypeID", sql.Int,1)
                    .query("select * from Person.AddressType where AddressTypeID =  @AddressTypeID")
 let result2 = await pool
                    .request()
                    .input("LastName", sql.VarChar,"B84F78B1-4EFE-4A0E-8CB7-70E9F112F886")
                    .input("FirstName", sql.VarChar,"Billing")
                    .execute("Personget")
console.log(result1.recordset[0])
sql.close();
}
catch(error){
    console.log(error.message);
    sql.close();
}
}

//getdbuserasyncfunction();


//promise
sql.connect(config).then(pool=>{
  return   pool
  .request()
  .input("LastName", sql.VarChar,"B84F78B1-4EFE-4A0E-8CB7-70E9F112F886")
  .input("FirstName", sql.VarChar,"Billing")
  .execute("Personget")

}).then(result=>{ 
    console.log(result.recordset[0] );
    sql.close();
}).catch(err => {
    console.log(err.message);
    sql.close();
})

//callback
 sql.connect(config, (err) => {
     if(err)
     {
         console.log(err.message);
     }else{
         new sql.Request()
         .input("AddressTypeID", sql.Int,1)
         .query("select * from Person.AddressType where AddressTypeID  =  @AddressTypeID" ,  (err , result)=>{
            if(err)
            {
             console.log(err.message);
             sql.close();
            }else{
                console.log(result.recordset[0] );
                sql.close();
            }

         });
     }
 })