const {MoleculerRetryableError} = require("moleculer").Errors;

module.exports = {
    // Define service name
    name: "products",

    actions: {
        // Define service action that returns the available products
        listProducts(ctx) {
            return [
                { name: "Apples", price: 5 },
                { name: "Oranges", price: 3 },
                { name: "Bananas", price: 2 }
            ];
        },

        throwErrorProducts(ctx){
            this.logger.info("Throwing Out an error if that helps");
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    let er = new MoleculerRetryableError("AXIOS ERROR TRY AGAIN",500,'PLEASE RETRY', "data")
                    er.retryable = true;
                    this.logger.info(JSON.stringify(er));
                    reject(er);

                },2)
            })
        }
    }
}
