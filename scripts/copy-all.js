"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require("ftp");
var dotenv = require("dotenv");
var fs = require("node:fs");
var node_util_1 = require("node:util");
var promises_1 = require("node:stream/promises");
dotenv.config({ path: ".env.local" });
var outDir = "wp-backup";
var config = {
    host: process.env.server,
    port: parseInt(process.env.port),
    user: process.env.username,
    password: process.env.password,
};
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}
var numFiles = 0;
var c = new Client.default();
var cwd = (0, node_util_1.promisify)(c.cwd);
var cdup = (0, node_util_1.promisify)(c.cdup);
var list = (0, node_util_1.promisify)(c.list);
var get = (0, node_util_1.promisify)(c.get);
c.on("ready", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, copyDirectory()];
                case 1:
                    _a.sent();
                    console.log(numFiles);
                    c.end();
                    return [2 /*return*/];
            }
        });
    });
});
c.connect(config);
function copyDirectory() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var files, _d, files_1, files_1_1, name_1, type, stream, e_1_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, list()];
                case 1:
                    files = _e.sent();
                    numFiles += files.filter(function (_a) {
                        var type = _a.type;
                        return type !== "d";
                    }).length;
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 16, 17, 22]);
                    _d = true, files_1 = __asyncValues(files);
                    _e.label = 3;
                case 3: return [4 /*yield*/, files_1.next()];
                case 4:
                    if (!(files_1_1 = _e.sent(), _a = files_1_1.done, !_a)) return [3 /*break*/, 15];
                    _c = files_1_1.value;
                    _d = false;
                    _e.label = 5;
                case 5:
                    _e.trys.push([5, , 13, 14]);
                    name_1 = _c.name, type = _c.type;
                    if (name_1 === "." || name_1 === "..")
                        return [3 /*break*/, 14];
                    if (!(type === "d")) return [3 /*break*/, 9];
                    return [4 /*yield*/, cwd(name_1)];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, copyDirectory()];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, cdup()];
                case 8:
                    _e.sent();
                    return [3 /*break*/, 12];
                case 9: return [4 /*yield*/, get(name_1)];
                case 10:
                    stream = _e.sent();
                    return [4 /*yield*/, (0, promises_1.pipeline)(stream, fs.createWriteStream("".concat(outDir, "/").concat(name_1)))];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    _d = true;
                    return [7 /*endfinally*/];
                case 14: return [3 /*break*/, 3];
                case 15: return [3 /*break*/, 22];
                case 16:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 22];
                case 17:
                    _e.trys.push([17, , 20, 21]);
                    if (!(!_d && !_a && (_b = files_1.return))) return [3 /*break*/, 19];
                    return [4 /*yield*/, _b.call(files_1)];
                case 18:
                    _e.sent();
                    _e.label = 19;
                case 19: return [3 /*break*/, 21];
                case 20:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 21: return [7 /*endfinally*/];
                case 22: return [2 /*return*/];
            }
        });
    });
}
