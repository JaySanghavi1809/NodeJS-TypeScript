"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
var models_1 = require("./src/models");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var user_routes_1 = require("./src/routes/user.routes");
var celebrate_1 = require("celebrate");
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use('/', user_routes_1["default"]);
app.use((0, celebrate_1.errors)());
models_1["default"].sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log("App listening on port ".concat(port));
    });
});
