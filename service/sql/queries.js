/** REQUIRED PACKAGES **/
require('dotenv').config({ path: './../../.env' })
const mysql = require("mysql");


/******************
*  DB CONNECTION  *
******************/

var connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    localAddress: process.env.LOCALADDRESS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset : process.env.DB_CHARSET,
    connectTimeout : 20000,
    connectionLimit : 100
});


/** GET DUPLICATE ENTRIES **/
exports.duplicateEntry = async () => {

	return new Promise((resolve,reject)=>{
        let query = `SELECT url FROM trackingData where scrapeDate LIKE "2020-06-21%" GROUP BY url HAVING COUNT(url) > 1`;
        connection.query(query, (err, rows, fields) => {
            if (err) {
                console.log(err);
                err["query"] = query
                console.log(err);
                
                reject(err)
            }
            else{
                resolve({
                    rows : rows,
                    fields : fields,
                    query : query
                })
            }
        })
	})

}
