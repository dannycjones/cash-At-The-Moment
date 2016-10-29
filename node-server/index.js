var request = require('superagent')

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.4445354,-1.7677615&radius=5000&type=bank&key=AIzaSyA0ycJ9qugG2vHo4R2LY3W-81vu1g3Otj8
request
   .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json')
   .query({ location: '52.4445354,-1.7677615' })
   .query({ radius: '5000' })
   .query({ type: 'bank' })
   .query({ key: 'AIzaSyA0ycJ9qugG2vHo4R2LY3W-81vu1g3Otj8' })
   .end(function(err, res){
     console.log(res.body)
   });
