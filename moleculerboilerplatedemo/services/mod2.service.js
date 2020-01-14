
module.exports = {
    // Define service name
    name: "delayProducts",

    actions: {
        // Define service action that returns the available products
        listProducts(ctx) {
            this.logger.info("It hit me!");
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([
                        { name: "Apples", price: 5 },
                        { name: "Oranges", price: 3 },
                        { name: "Bananas", price: 2 }
                    ]);
                },900)
            });
        }
    }
};
