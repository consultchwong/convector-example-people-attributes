"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var homedir = require('os').homedir();
exports.chaincode = process.env.CHAINCODE || 'convector-example-people-attributes';
exports.channel = process.env.CHANNEL || 'ch1';
exports.identityId = process.env.IDENTITYID || 'admin';
exports.identityName = process.env.IDENTITY || 'admin';
exports.identityOrg = process.env.ORG || 'org1';
exports.keyStore = process.env.KEYSTORE || '/' + homedir + '/hyperledger-fabric-network/.hfc-' + exports.identityOrg;
exports.networkProfile = process.env.NETWORKPROFILE || '/' + homedir +
    '/hyperledger-fabric-network/network-profiles/' +
    exports.identityOrg + '.network-profile.yaml';
exports.port = process.env.PORT || 8000;
exports.couchDBView = process.env.COUCHDBVIEW || 'ch1_convector-example-people-attributes';
exports.couchDBProtocol = process.env.COUCHDB_PROTOCOL || 'http';
exports.couchDBHost = process.env.COUCHDB_HOST || 'localhost';
exports.couchDBPort = process.env.COUCHDB_PORT || 5084;
//# sourceMappingURL=env.js.map