const request = require('request');
const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=0e0852c09649b58c23f70c89636ae8bd&query='+latitude+','+longitude+'&units=f';

     request({url :url, json: true}, (error, {body})=>{
         if(error){
             callback('Unable to connect to weather service!', undefined);

         }else if(body.error){
             callback('Unable to find location', undefined)

         }else{
             callback(undefined,body.current.weather_descriptions[0] +'. It is currently '+ body.current.temperature+'. It feels like '+ body.current.feelslike);
             
         }



     })
}

module.exports = forecast;