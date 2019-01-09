/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const { googleMapsClient } = require("./google_api.js");

const location = { 
    input: process.argv[2],
    inputtype:'textquery',
};

let ret = {};

googleMapsClient.findPlace(location).asPromise()
  .then((response) => {
    ret.placeid = response.json.candidates[0].place_id
    googleMapsClient.place(ret).asPromise()
    .then((response) => {
        ret.address = response.json.result.formatted_address
        ret.lat = JSON.stringify(response.json.result.geometry.location.lat)
        ret.lng = JSON.stringify(response.json.result.geometry.location.lng)
        console.log(`${location.input} is located at coordinates [ lat: ${ret.lat}, lng: ${ret.lng} ] , at the address ${ret.address}.`)
    })
    .catch((err) => {
        console.log(err);
    });
    })
    .catch((err) => {
        console.log(err);
    });

