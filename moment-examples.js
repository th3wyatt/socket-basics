var moment = require('moment');
var now = moment();


var timestamp = 1421983122;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));


//console.log(now.format('X'));
//console.log(now.format('x'));




//console.log(now.format());
//console.log(now.format('MMM Do YYYY, h:mma'));