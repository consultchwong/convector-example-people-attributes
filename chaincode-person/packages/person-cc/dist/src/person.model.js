"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var Attribute = (function (_super) {
    tslib_1.__extends(Attribute, _super);
    function Attribute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.attribute';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_1.ReadOnly(),
        convector_core_1.Required()
    ], Attribute.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_1.Required()
    ], Attribute.prototype, "content", void 0);
    tslib_1.__decorate([
        convector_core_1.Required(),
        convector_core_1.ReadOnly(),
        convector_core_1.Validate(yup.number())
    ], Attribute.prototype, "issuedDate", void 0);
    tslib_1.__decorate([
        convector_core_1.Default(false),
        convector_core_1.Validate(yup.boolean())
    ], Attribute.prototype, "expired", void 0);
    tslib_1.__decorate([
        convector_core_1.Required(),
        convector_core_1.Validate(yup.string())
    ], Attribute.prototype, "certifierID", void 0);
    return Attribute;
}(convector_core_1.ConvectorModel));
exports.Attribute = Attribute;
var Person = (function (_super) {
    tslib_1.__extends(Person, _super);
    function Person() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.person';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_1.ReadOnly(),
        convector_core_1.Required()
    ], Person.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_1.Required(),
        convector_core_1.Validate(yup.string())
    ], Person.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_1.Validate(yup.array(Attribute.schema()))
    ], Person.prototype, "attributes", void 0);
    return Person;
}(convector_core_1.ConvectorModel));
exports.Person = Person;
//# sourceMappingURL=person.model.js.map