var AWS = require('aws-sdk');
AWS.config.update({region:'ap-south-1'});
var ec2 = new AWS.EC2({apiVersion:'2016-11-15'});


function instanceOps(){
var status = 'STOP';
var instanceid = 'i-09bdbfd2b2349618c';
var params = { 
    InstanceIds : [instanceid]
    };

if(status.toUpperCase()==="START"){
    ec2.startInstances(params,function(err,data){
            if(err){console.log("ERROR IN STARTING INSTANCE", err);}
            else if(data){console.log("SUCCESS IN STARTING INSTANCE:", data);}
});

}else if(status.toUpperCase()==="STOP"){
    ec2.stopInstances(params,function(err,data){
            if(err){console.log("ERROR IN STOPPING INSTANCE:", err);}
            else if(data){console.log("SUCCESS IN STOPPING INSTANCE:", data)}
    });
}


};
module.exports.handler= instanceOps;