"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var participant_model_1 = require("./participant.model");
var ParticipantController = (function (_super) {
    tslib_1.__extends(ParticipantController, _super);
    function ParticipantController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParticipantController.prototype.register = function (id, name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existing, participant;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, participant_model_1.Participant.getOne(id)];
                    case 1:
                        existing = _a.sent();
                        if (!(!existing || !existing.id)) return [3, 3];
                        participant = new participant_model_1.Participant();
                        participant.id = id;
                        participant.name = name || id;
                        participant.msp = this.tx.identity.getMSPID();
                        participant.CAUserName = this.tx.identity.getX509Certificate().subject.commonName;
                        console.log(this.tx.identity.getX509Certificate().subject.commonName);
                        participant.identities = [{
                                fingerprint: this.sender,
                                status: true
                            }];
                        return [4, participant.save()];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3: throw new Error('Identity exists already, please call changeIdentity fn for updates');
                    case 4: return [2];
                }
            });
        });
    };
    ParticipantController.prototype.changeIdentity = function (id, newIdentity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isAdmin, requesterMSP, existing;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isAdmin = this.tx.identity.getAttributeValue('admin');
                        requesterMSP = this.tx.identity.getMSPID();
                        return [4, participant_model_1.Participant.getOne(id)];
                    case 1:
                        existing = _a.sent();
                        if (!existing || !existing.id) {
                            throw new Error('No identity exists with that ID');
                        }
                        if (existing.msp != requesterMSP) {
                            throw new Error('Unathorized. MSPs do not match');
                        }
                        if (!isAdmin) {
                            throw new Error('Unathorized. Requester identity is not an admin');
                        }
                        existing.identities = existing.identities.map(function (identity) {
                            identity.status = false;
                            return identity;
                        });
                        existing.identities.push({
                            fingerprint: newIdentity,
                            status: true
                        });
                        return [4, existing.save()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ParticipantController.prototype.get = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existing;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, participant_model_1.Participant.getOne(id)];
                    case 1:
                        existing = _a.sent();
                        if (!existing || !existing.id) {
                            throw new Error("No identity exists with that ID " + id);
                        }
                        return [2, existing];
                }
            });
        });
    };
    ParticipantController.prototype.getAll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, participant_model_1.Participant.getAll('io.worldsibu.examples.participant')];
                    case 1: return [2, (_a.sent()).map(function (participant) { return participant.toJSON(); })];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string()))
    ], ParticipantController.prototype, "register", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string()))
    ], ParticipantController.prototype, "changeIdentity", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], ParticipantController.prototype, "get", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], ParticipantController.prototype, "getAll", null);
    ParticipantController = tslib_1.__decorate([
        convector_core_1.Controller('participant')
    ], ParticipantController);
    return ParticipantController;
}(convector_core_1.ConvectorController));
exports.ParticipantController = ParticipantController;
//# sourceMappingURL=participant.controller.js.map