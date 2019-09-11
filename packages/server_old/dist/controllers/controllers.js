"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
var convector_2 = require("../convector");
function ParticipantController_register_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.ParticipantControllerBackEnd
                            .register(params.id, params.name)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_1 = _c.sent();
                    console.log('Error post ParticipantController_register', ex_1.stack);
                    res.status(500).send(ex_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.ParticipantController_register_post = ParticipantController_register_post;
function PersonController_create_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_2;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_2.PersonControllerBackEnd
                            .create(params.person)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_2 = _c.sent();
                    console.log('Error post PersonController_create', ex_2.stack);
                    res.status(500).send(ex_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.PersonController_create_post = PersonController_create_post;
function PersonController_get_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_3;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_2.PersonControllerBackEnd
                            .get(params.id)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_3 = _c.sent();
                    console.log('Error get PersonController_get', ex_3.stack);
                    res.status(500).send(ex_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.PersonController_get_get = PersonController_get_get;
//# sourceMappingURL=controllers.js.map