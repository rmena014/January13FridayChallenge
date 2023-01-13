"use strict";
// import * as mysql from "mysql2";
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
exports.__esModule = true;
// const connect = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "devuser",
//   password: "Richjenn014",
//   database: "classicmodels",
// });
// async function connectToDB() {
//   try {
//     connect.connect();
//     console.log("Connected to the database.");
//   } catch (error) {
//     console.error(`Error connecting to the database: ${error.message}`);
//   }
// }
// connectToDB();
// connect.query("SELECT 1", (error, results, fields) => {
//   if (error) {
//     console.error(`Error testing connection: ${error.message}`);
//   } else {
//     console.log("Connection test successful!");
//   }
// });
// // CREATE OPERATION
// connect.query(
//   "INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (497, 'Armada Workwear', 'Mena', 'Richard', '123-456-7890', '123 Goat St.', 'New York', 'USA')",
//   (error, results) => {
//     if (error) {
//       console.error(`Error inserting record: ${error.message}`);
//     } else {
//       console.log("Record created successfully!");
//     }
//   }
// );
// //READ OPERATION
// connect.query("Select * FROM customers", (error, results) => {
//   if (error) {
//     console.error(`Error reading record: ${error.message}`);
//   } else {
//     console.log("Record read successfully!");
//   }
// });
// //UPDATE OPERATION
// connect.query(
//   "UPDATE customers SET customerName = 'New Armada Workwear' WHERE customerNumber = 497",
//   (error, results) => {
//     if (error) {
//       console.error(`Error updating record: ${error.message}`);
//     } else {
//       console.log("Record updated successfully!");
//     }
//   }
// );
// // DELETE OPERATION
// connect.query(
//   "DELETE FROM customers WHERE customerNumber = 497",
//   (error, results) => {
//     if (error) {
//       console.error(`Error deleting record: ${error.message}`);
//     } else {
//       console.log("Record deleted successfully!");
//     }
//   }
// );
var mysql = require("mysql2");
var connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "devuser",
    password: "Richjenn014",
    database: "classicmodels"
});
function connectToDB() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connect.connect()];
                case 1:
                    _a.sent();
                    console.log("Connected to the database.");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error connecting to the database: ".concat(error_1.message));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
connectToDB();
//CREATE OPERATION
function createRecord() {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connect.query("INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (497, 'Armada Workwear', 'Mena', 'Richard', '123-456-7890', '123 Goat St.', 'New York', 'USA')")];
                case 1:
                    _a.sent();
                    console.log("Record created successfully!");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error inserting record: ".concat(error_2.message));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
createRecord();
// READ OPERATION
function readRecord() {
    return __awaiter(this, void 0, void 0, function () {
        var results, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connect.query("Select * FROM customers")];
                case 1:
                    results = _a.sent();
                    console.log("Record read successfully!");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error("Error reading record: ".concat(error_3.message));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
readRecord();
// UPDATE OPERATION
function updateRecord() {
    return __awaiter(this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connect.query("UPDATE customers SET customerName = 'New Armada Workwear' WHERE customerNumber = 497")];
                case 1:
                    _a.sent();
                    console.log("Record updated successfully!");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error("Error updating record: ".concat(error_4.message));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
updateRecord();
// DELETE OPERATION
function deleteRecord() {
    return __awaiter(this, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connect.query("DELETE FROM customers WHERE customerNumber = 497")];
                case 1:
                    _a.sent();
                    console.log("Record deleted successfully!");
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error("Error deleting record: ".concat(error_5.message));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
deleteRecord();
