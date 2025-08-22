"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationDomainServices = exports.UserDomainServices = void 0;
const userDomain_service_1 = require("./userDomain.service");
Object.defineProperty(exports, "UserDomainServices", { enumerable: true, get: function () { return userDomain_service_1.UserDomainServices; } });
const locationDomain_service_1 = require("./locationDomain.service");
Object.defineProperty(exports, "LocationDomainServices", { enumerable: true, get: function () { return locationDomain_service_1.LocationDomainServices; } });
exports.default = {
    UserDomainServices: userDomain_service_1.UserDomainServices,
    LocationDomainServices: locationDomain_service_1.LocationDomainServices
};
//# sourceMappingURL=index.js.map