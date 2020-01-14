const {ServiceBroker}  = require("moleculer");
module.exports.brokerNode1 = new ServiceBroker({
    nodeID: "node-1",
    transporter: "NATS"
});
