"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigMagmentModule = exports.ConfigService = void 0;
const config_module_1 = require("./config.module");
Object.defineProperty(exports, "ConfigMagmentModule", { enumerable: true, get: function () { return config_module_1.ConfigMagmentModule; } });
const config_service_1 = require("./config.service");
Object.defineProperty(exports, "ConfigService", { enumerable: true, get: function () { return config_service_1.ConfigService; } });
exports.default = {
    ConfigService: config_service_1.ConfigService,
    ConfigMagmentModule: config_module_1.ConfigMagmentModule
};
//# sourceMappingURL=index.js.map