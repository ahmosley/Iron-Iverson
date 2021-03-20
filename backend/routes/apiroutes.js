const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();


// search for a flight
router.get('/flight-schedule', routeGuard , (req, res, next) => {    
      axios
      .get (`/operations/schedules/${origin}/${destination}/${fromDateTime}`)
      .then(flightsSearch=>{
        const flights = flightsSearch.data;
        console.log(flights)
        res.render("/Iron-Iverson/frontend/src/components/Flights.js", {flights})
      })
      .catch(error=> {
        console.log(`error while searching by flights ${error}`)
      });
    });

    
module.exports= router;