// URL

/* 
    Uniform Resource Locator (Identifier)

    Address that allows us to access web resources

    DNS (domain name) server resolves that string address representation into an IP address

    * http:// & https:// -> protocol type
    * www.apple.com -> domain
        * can have subdomains (ex: lms.uprighted.com)
        * .com; .pl; .co.uk <- top level domains
        * domain == IP address (once resolved by DNS server) + port == socket
    * Port :80 for HTTP or :443 for HTTPS
    * Path
        * Location and structure of content within the resource
    * Query Parameters
        * map to key-value pairs within an object
        * begin with ?
        * separated by &
        * the property is assigned to value (ex: ?name=Paul&age=22)
        * usually does not contain " "
    * Anchors
        * id's that allow us to go to a specific point in the document
        * ex: #footer will take you to an element that has that specific id attribute value
*/

// API

/* 
    Application Programming Interface
    
    A way for a client to communicate with the server

    Allows for the HTTP request and response lifecycle

    Part of RESTful architecture

    * Representational State Transfer
    * Stateless, cacheable, layered system allowing for request and response using:
        * CRUD thru GET, PUT, POST, & DELETE methods
        * HTTP requests sent from client
            * headers
            * body
            * query parameters
            * status codes
        * HTTP response received from server
*/

// Fetch API

/* 
    Fetch is an asynchronous function.
    We don't know how long request-response lifecycle will take

    1. Fetch your resource and return a promise
    2. Use .then resolver to catch fetch's return and assign to a parameter
    3. The parameter is part of Response interface object
    4. Body of our response is inaccessible. Part of ReadableStream
    5. Utilize Response interface .json() method to read the stream
    6. .json() method returns a promise
    7. Resolve the promise with one more .then() resolver
    8. Catch the return as a data parameter
*/

let url = "https://api.spacexdata.com/v3/capsules/past"
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))

// Fetch using Asynchronous Function

async function getData() {
    try {
        let response = await fetch(urls)
        let data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
    console.log("The code after the error")
}

getData()

// Challenge

/* 
    Fetch a pokemon
*/

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

let response = '{"name": "Paul"}'

console.log(typeof response)

let responseObj = JSON.parse(response)
console.log(responseObj)

// JSON String Rules
/* 
    1. Object string enclosed by ' '
    2. Properties and values enclosed by " "
    3. Property to Value is : separated
    4. Key:Value pairs are comma separated
    5. NO TRAILING COMMA!!!
    6. No methods or expressions allowed
*/

// Creating Pokedex

/* 
    Create two functions: one that fetches data and one that renders data

    Create an input field with a Submit button that will take the name of the pokemon and place it inside of your fetch

    When the pokemon gets fetched, let's build out a div container
    In this div, have an element for pokemon name, weight, and picture.
    Have another container that will list out all of its moves


    HINT: The function that fetches data should probably have the renderData function invoked inside it.\

    Please utilize flexbox to make it look semi alright
*/


