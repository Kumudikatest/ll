let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'Test',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                DataType: 'String',
                StringValue: 'Promotional'
            },
        },
        PhoneNumber: '+940772445224'
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}