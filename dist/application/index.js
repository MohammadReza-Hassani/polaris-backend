"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = exports.UserService = void 0;
const user_services_1 = require("./services/user.services");
Object.defineProperty(exports, "UserService", { enumerable: true, get: function () { return user_services_1.UserService; } });
const location_services_1 = require("./services/location.services");
Object.defineProperty(exports, "LocationService", { enumerable: true, get: function () { return location_services_1.LocationService; } });
exports.default = {
    UserService: user_services_1.UserService,
    LocationService: location_services_1.LocationService
};
//# sourceMappingURL=index.js.map