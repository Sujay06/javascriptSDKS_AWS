var AWS = require('aws-sdk');
AWS.config.update({region : 'ap-south-1'});
var ec2 = new AWS.EC2({apiVersion:'2016-11-15'})

