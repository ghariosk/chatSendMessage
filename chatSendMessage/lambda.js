let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);
const AWS = require('aws-sdk');

exports.handler = async function (event, context, callback) {

    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used

        var connection= await rds.query({
        instanceIdentifier: 'main',
        query: 'SELECT connectionId from chat',
        inserts: [0]
    }, function (error, results, connection) {
        if (error) {
            console.log("Error occurred");
            throw error;
        } else {
            console.log("Success")
            console.log(results);
            

            
        }

        connection.end();

        console.log(results)
        return results
    });
    var connectionData = await connection.json()

    console.log(connectionData)
    

    

//     const apigwManagementApi = new AWS.ApiGatewayManagementApi({
//     apiVersion: '2018-11-29',
//     endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
//     });

//     const postData = JSON.parse(event.body).data;
  
//   const postCalls = connectionData.map(async ({ connectionId }) => {
//     try {
//       await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: postData }).promise();
//     } catch (e) {
//       if (e.statusCode === 410) {
//         console.log(`Found stale connection, deleting ${connectionId}`);
//         await ddb.delete({ TableName: TABLE_NAME, Key: { connectionId } }).promise();
//       } else {
//         throw e;
//       }
//     }
//   });
  
//   try {
//     await Promise.all(postCalls);
//   } catch (e) {
//     return { statusCode: 500, body: e.stack };
//   }

  return { statusCode: 200, body: 'Data sent.' };
 
}