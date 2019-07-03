let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (request, response) {
    // You must always quit the redis client after it's used
    redis.get({
        redisClient: 'testup1',
        params: ['k1']
    }, function (error, response, redisClient) {
        if (error) {
            callback(error);
            console.log(error);
        } else {
            redisClient.quit();
        }
    });
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_KtFzugXbq",
        Limit: 10
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });

    response.send({ "message": "Successfully executed" });
}