//helloworld.js:

Module.register("helloworld",{
	// Default module config.
	defaults: {
		text: "Hello World!
		requiresVersion: "2.1.0","
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
