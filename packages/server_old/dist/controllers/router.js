"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/participant/register', controllers_1.ParticipantController_register_post)
    .post('/person/create', controllers_1.PersonController_create_post)
    .get('/person/get/:id', controllers_1.PersonController_get_get);
//# sourceMappingURL=router.js.map