const {ServiceBroker}  = require("moleculer");
module.exports.brokerNode2 = new ServiceBroker({
    nodeID: "node-2",
    transporter: "NATS"
});
