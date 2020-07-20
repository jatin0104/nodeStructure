/** REQUIRED PACKAGES */
var query = require('./../service/sql/queries');

/** EXPORT DUPLICATE ENTRY FUNCTION  */

exports.getDuplicateEntry = async () => {

    try{

        let entries = await query.duplicateEntry();
        if( entries.rows.length > 0  ){
            return{
                status: 1,
                message: 'fetch entry',
                data: entries
            }
        }else{
            return{
                status: 0,
                message: 'FUCK OFF'
            }
        }
    }catch(e){
        console.log( 'IN SCRIPTCONTROLLER: ', e );
        return {
            status: 0,
            message: e,
            file: 'IN SCRIPTCONTROLLER'
        };
    }

}
