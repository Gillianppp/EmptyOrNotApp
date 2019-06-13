//var AWS = require('aws-sdk/dist/aws-sdk-react-native');
import AWS from "aws-sdk";

var albumBucketName = 'boston-ai-emptyornot';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:b6c31b62-67d4-43c9-8e1c-5220ac34aa28',
});


module.exports = [
	{
		id:1,
		image:require('../images/01.jpg'),
		name:AWS.config.region
	},
	{
		id:2,
		image:require('../images/02.jpg')
	},
	{
		id:3,
		image:require('../images/03.jpg')
	}
]