"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var buefy_1 = require("buefy");
require("buefy/dist/buefy.css");
vue_1["default"].config.productionTip = false;
vue_1["default"].use(buefy_1["default"]);
new vue_1["default"]({
    router: router_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
