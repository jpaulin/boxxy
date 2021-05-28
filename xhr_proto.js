/* The backend (REST) server information - how to contact backend */
/* Config alternatives:
 * Scenarios: url: '127.0.0.1' if you have server at your "localhost"
 */
var srv = {
	url: '46.101.176.136',
	portnum: 3000,
	method: 'http',
}

// Use a XHR lib for network API requests
// Doc: https://www.npmjs.com/package/xmlhttprequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Using async fetch of all data. Thus while data arrives, we keep a 
// animation spinning in UI. When data fetched, this "loader splash icon"
// disappears and data appears in its place. User happy :-)

var responseText = 'Just debugging';

// The callback, that gets called after XHR has been completed
// 
// actionVerb can be one of 
// "INIT" - this is first call to API, to get all books
function reqListener (actionVerb, callInst) {
	if (actionVerb=='INIT') {
		console.log(ck.yellow('API INITIAL RESPONSE: '));
		console.log(ck.green());
	}
	if (actionVerb=='GET_BOOK') {

	}
	if (actionVerb=='CREATE_BOOK') {

	}
}

// Colors for terminal
const ck=require('chalk');
console.log(ck.green('Starting!'));

// Flags
// Wait for this to be true, before letting user do UI edits
// When dataInitialized is 'false', the API has not yet answered
// our init call. 
// 'true' -> app is ready to go - data fetched!

var dataInitialized = false;

//
console.log(ck.green('..next, create a XMLHttpRequest object:'));
// Code for xhr

console.log(ck.green('OK!'));

// Shorthands for frontend - easy access and memorizable calls 
// Shorthand elegant forms of calling API, so that we can 
// keep a distance from the guts and messy SQL queries.

function getServerURL(verbAction) {
	if (verbAction == 'INIT') {
		return (srv.method + srv.url + ':' + srv.portnum + '/GET/books');
	}
}


/* Read all of books into memory */
function getAllData() {
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener('INIT'));
	// use the getServerURL() to make a proper URL
	oReq.open("GET", getServerURL('INIT'));
	oReq.send();
}

