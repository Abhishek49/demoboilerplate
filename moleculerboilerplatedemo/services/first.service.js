const HTTPServer = require("moleculer-web");

// Create the broker for node-1
// Define nodeID and set the communication bus


module.exports ={
    // Define service name
    name: "gateway",
    // Load the HTTP server
    mixins: [HTTPServer],

    settings: {
        path: "/api",
        port: process.env.PORT || 3000,
        routes: [
            {
                aliases: {
                    // When the "GET /products" request is made the "listProducts" action of "products" service is executed
                    "GET /products": "products.listProducts",
                    "GET /delayproducts": "delayProducts.listProducts",
					"GET /needError": "products.throwErrorProducts",
                    "GET /currentCachedTime": "greeter.welcome",
                    "GET /cleanCacheRequest": "greeter.cleanCacheRequest",
                    "GET /__webpack_hmr": "products.listProducts"
                }
            }
        ],
        whitelist: [
            // Access to any actions in all services under "/api" URL
            "**"
        ],
        assets: {
            folder: "./public"
        }
    }
}
