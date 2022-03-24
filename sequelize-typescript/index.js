"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
var models_1 = require("./models");
app.get('/', function (req, res) {
    models_1["default"].User.findAll({
        include: {
            model: models_1["default"].Project
        }
    }).then(function (result) { return res.json(result); })["catch"](function (err) { return console.error(err); });
});
models_1["default"].sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log("App listening on port ".concat(port));
    });
});
