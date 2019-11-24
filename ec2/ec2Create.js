var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
var EC2 = new AWS.EC2({apiVersion:'2016-11-15'});


function ec2Create(){   
    ec2_create();
}

function ec2_create(){

var instanceParams = {
    ImageId: 'ami-0123b531fc646552f',
    InstanceType: 't2.micro',
    MinCount: 1 ,
    MaxCount: 1,
    KeyName: 'key',
};

var instancePromise = new AWS.EC2 ({apiVersion:'2016-11-15'}).runInstances(instanceParams).promise();

instancePromise.then(
    function(data){ console.log(data);
    var instanceId = data.Instances[0].InstanceId;
    console.log("Instance Created:", instanceId);
  var tagParams = {Resources: [instanceId], Tags:[
        { Key: "anything",
        Value: "example" 
        }
    ]};

var tagPromise = new AWS.EC2({apiVersion:'2016-11-15'}).createTags(tagParams).promise();

tagPromise.then(
    function(data){
    console.log('Instance tagged 1:');
}).catch(
        function(err){
            console.error(err,err.stack);
        });
    }).catch(
        function(err){
            console.error(err,err.stack);
        });


}
module.exports.handler = ec2Create;
