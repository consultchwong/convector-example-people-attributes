"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var participant_cc_1 = require("participant-cc");
var person_model_1 = require("./person.model");
var PersonController = (function (_super) {
    tslib_1.__extends(PersonController, _super);
    function PersonController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonController.prototype.create = function (person) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists, gov, govActiveIdentity;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, person_model_1.Person.getOne(person.id)];
                    case 1:
                        exists = _a.sent();
                        if (!!exists && exists.id) {
                            throw new Error('There is a person registered with that Id already');
                        }
                        return [4, participant_cc_1.Participant.getOne('gov')];
                    case 2:
                        gov = _a.sent();
                        if (!gov || !gov.identities) {
                            throw new Error('No government identity has been registered yet');
                        }
                        govActiveIdentity = gov.identities.find(function (identity) { return identity.status === true; });
                        if (!govActiveIdentity) {
                            throw new Error('No active identity found for participant');
                        }
                        if (this.sender !== govActiveIdentity.fingerprint) {
                            throw new Error("Just the government - ID=gov - can create people - requesting organization was " + this.sender);
                        }
                        return [4, person.save()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    PersonController.prototype.addAttribute = function (personId, attribute) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var participant, participantActiveIdentity, person, exists, attributeOwner, attributeOwnerActiveIdentity;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, participant_cc_1.Participant.getOne(attribute.certifierID)];
                    case 1:
                        participant = _a.sent();
                        if (!participant || !participant.identities) {
                            throw new Error("No participant found with id " + attribute.certifierID);
                        }
                        participantActiveIdentity = participant.identities.find(function (identity) { return identity.status === true; });
                        if (!participantActiveIdentity) {
                            throw new Error('No active identity found for participant');
                        }
                        if (this.sender !== participantActiveIdentity.fingerprint) {
                            throw new Error("Requester identity cannot sign with the current certificate " + this.sender + ". This means that the user requesting the tx and the user set in the param certifierId do not match");
                        }
                        return [4, person_model_1.Person.getOne(personId)];
                    case 2:
                        person = _a.sent();
                        if (!person || !person.id) {
                            throw new Error("No person found with id " + personId);
                        }
                        if (!person.attributes) {
                            person.attributes = [];
                        }
                        exists = person.attributes.find(function (attr) { return attr.id === attribute.id; });
                        if (!!!exists) return [3, 4];
                        return [4, participant_cc_1.Participant.getOne(exists.certifierID)];
                    case 3:
                        attributeOwner = _a.sent();
                        attributeOwnerActiveIdentity = attributeOwner.identities.find(function (identity) { return identity.status === true; });
                        if (this.sender !== attributeOwnerActiveIdentity.fingerprint) {
                            throw new Error("User already has an attribute for " + attribute.id + " but current identity cannot update it");
                        }
                        exists = attribute;
                        return [3, 5];
                    case 4:
                        person.attributes.push(attribute);
                        _a.label = 5;
                    case 5: return [4, person.save()];
                    case 6:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    PersonController.prototype.get = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existing;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, person_model_1.Person.getOne(id)];
                    case 1:
                        existing = _a.sent();
                        if (!existing || !existing.id) {
                            throw new Error("No person exists with that ID " + id);
                        }
                        return [2, existing];
                }
            });
        });
    };
    PersonController.prototype.getAll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, person_model_1.Person.getAll('io.worldsibu.person')];
                    case 1: return [2, (_a.sent()).map(function (person) { return person.toJSON(); })];
                }
            });
        });
    };
    PersonController.prototype.getByAttribute = function (id, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, person_model_1.Person.query(person_model_1.Person, {
                            'selector': {
                                'attributes': {
                                    '$elemMatch': {
                                        'id': id,
                                        'content': value
                                    }
                                }
                            }
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(person_model_1.Person))
    ], PersonController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(person_model_1.Attribute.schema()))
    ], PersonController.prototype, "addAttribute", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], PersonController.prototype, "get", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], PersonController.prototype, "getAll", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.mixed()))
    ], PersonController.prototype, "getByAttribute", null);
    PersonController = tslib_1.__decorate([
        convector_core_1.Controller('person')
    ], PersonController);
    return PersonController;
}(convector_core_1.ConvectorController));
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map