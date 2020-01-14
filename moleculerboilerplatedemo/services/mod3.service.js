module.exports = {
    name: "greeter",

    actions: {

        welcome1: {
            cache:true,

            handler(ctx) {
                const today = new Date();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                return `Current time:, ${time}`;
            }
        },

        cleanCacheRequest1(ctx) {
            // Clear cache
            this.cleanCache();
        }

    },

    methods: {
        cleanCache() {
            this.broker.broadcast("cache.clean");
        }
    },

    events: {
        "cache.clean"() {
            if (this.broker.cacher) {
                this.broker.cacher.clean("*");
            }
        }
    }
};
