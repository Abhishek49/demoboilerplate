"use strict";

module.exports = {
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return "Hello Moleculer";
		},

		/**
		 * Welcome a username
		 *
		 * @returns
		 */
		welcome: {
			cache:true,

			handler(ctx) {
                const today = new Date();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

				return `Current time:, ${time}`;
			}
		},

        cleanCacheRequest(ctx) {
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
    },

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};
