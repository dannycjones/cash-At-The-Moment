var async = require('async');
var request = require('superagent');

function getLocalPlaces(atmType, callback) {
  request
     .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json')
     .query({ location: '52.4445354,-1.7677615' })
     .query({ radius: '2500' })
     .query({ type: atmType })
     .query({ key: 'AIzaSyA0ycJ9qugG2vHo4R2LY3W-81vu1g3Otj8' })
     .end(function(err, res){
       callback(null, res.body.results);
     });
}

function filterListedATM(atm) {
  return atm.name.match(/.*(Barclays|NatWest|Santander|HSBC|Lloyds|RBS|Halifax).*/);
}

async.parallel([
    function(callback) {
      getLocalPlaces('bank', callback)
    },
    function(callback) {
      getLocalPlaces('atm', callback)
    }
],
// optional callback
function (err, results) {
  atmArray = [];
  results.forEach(function (resultsOfType) {
    resultsOfType.forEach(function (result) {
      atmArray.push(result);
    });
  });
  atmArray = atmArray.filter(filterListedATM);
  console.log(atmArray);
});
