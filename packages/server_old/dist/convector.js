"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = require("path");
var env_1 = require("./env");
var fs = require("fs");
var convector_adapter_fabric_1 = require("@worldsibu/convector-adapter-fabric");
var convector_core_1 = require("@worldsibu/convector-core");
var participant_cc_1 = require("participant-cc");
var person_cc_1 = require("person-cc");
var adapter = new convector_adapter_fabric_1.FabricControllerAdapter({
    txTimeout: 300000,
    user: env_1.identityName,
    channel: env_1.channel,
    chaincode: env_1.chaincode,
    keyStore: path_1.resolve(__dirname, env_1.keyStore),
    networkProfile: path_1.resolve(__dirname, env_1.networkProfile)
});
exports.initAdapter = adapter.init();
exports.ParticipantControllerBackEnd = convector_core_1.ClientFactory(participant_cc_1.ParticipantController, adapter);
exports.PersonControllerBackEnd = convector_core_1.ClientFactory(person_cc_1.PersonController, adapter);
var contextPath = path_1.join(env_1.keyStore + '/' + env_1.identityName);
fs.readFile(contextPath, 'utf8', function (err, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (err) {
                throw new Error('Context in ' + contextPath
                    + ' does not exist. Make sure that path resolves to your key stores folder');
            }
            else {
                console.log('Context path with cryptographic materials exists');
            }
            return [2];
        });
    });
});
//# sourceMappingURL=convector.js.map