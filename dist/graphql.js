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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
require("./db/dbConnection.js");
const Monigote_1 = __importDefault(require("./models/Monigote"));
exports.typeDefs = (0, apollo_server_1.gql) `

    type Estilos {
        background: String!
        borderRadius: String!
        transform: String
    }

    type Miembro {
        id:ID!
        nombre: String
        estilos: Estilos
    }

    type Query {
        miembros(nombre:[String]): [Miembro]
        miembro(nombre:String!): Miembro
        monigote: [Miembro]
    }

    type Mutation {
        agregarMiembro(
            nombre: String!
            background: String!
            borderRadius: String!
            transform: String
        ):Miembro
    }
`;
exports.resolvers = {
    Query: {
        miembro: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Monigote_1.default.findOne({ nombre: args.nombre });
        }),
        miembros: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Monigote_1.default.find({ nombre: { $in: args.nombre } });
        }),
        monigote: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Monigote_1.default.find({});
        })
    },
    Mutation: {
        agregarMiembro: (_, args) => {
            const { nombre, background, borderRadius, transform } = args;
            const miembro = new Monigote_1.default({ nombre, background, borderRadius, transform });
            return miembro.save();
        },
    },
    Miembro: {
        estilos: (root) => {
            return {
                background: root.background,
                borderRadius: root.borderRadius,
                transform: root.transform
            };
        }
    }
};
