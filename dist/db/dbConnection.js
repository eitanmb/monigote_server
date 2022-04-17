"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const DB_CNN = process.env.DB_CNN;
if (!DB_CNN) {
    process.exit(1);
}
mongoose_1.default.connect(DB_CNN)
    .then(() => console.log('Conectado a la Base de Datos')).catch(err => {
    console.log(err);
});
