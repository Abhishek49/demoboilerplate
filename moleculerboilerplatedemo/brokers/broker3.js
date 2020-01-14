const {ServiceBroker}  = require("moleculer");
module.exports.brokerNode3 = new ServiceBroker({
    nodeID: "node-3",
    transporter: "NATS",
    requestTimeout: 100,
    retryPolicy: {
        retries: 5,
        delay: 200,
        maxDelay: 1000,
        factor: 2,
        check: err => !!err.retryable
    },
    logger: console,
    logLevel: "info"
});
