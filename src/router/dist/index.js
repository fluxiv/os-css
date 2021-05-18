"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Login_vue_1 = require("../login/Login.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/',
        name: 'Login',
        component: Login_vue_1["default"]
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];
var router = new vue_router_1["default"]({
    routes: routes
});
exports["default"] = router;
