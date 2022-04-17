"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const miembroSchema = new mongoose_1.default.Schema({
    nombre: {
        type: String,
        unique: true,
        require: true
    },
    background: {
        type: String,
        require: true
    },
    borderRadius: {
        type: String,
        require: true
    },
    transform: {
        type: String,
        require: false
    }
});
const Miembro = mongoose_1.default.model('Miembro', miembroSchema);
exports.default = Miembro;
