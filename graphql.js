import { gql } from 'apollo-server';
import './db/dbConnection.js';
import Miembro from './models/Monigote.js';


export const typeDefs = gql`

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
`

export const resolvers = {
    Query: {
        miembro: async( root, args ) => {
            return await Miembro.findOne({ nombre: args.nombre });
        },

        miembros: async(root, args) => {
            return await Miembro.find({ nombre: { $in: args.nombre } });

        },

        monigote: async() => {
            return await Miembro.find({});

        }
    },

    Mutation: {
        agregarMiembro: (root, args ) => {
            const { nombre, background, borderRadius, transform } = args;
            const miembro = new Miembro( { nombre, background, borderRadius, transform } );
            return miembro.save();
        },
    },

    Miembro: {
        estilos: ( root ) => {
            return {
                background: root.background,
                borderRadius: root.borderRadius,
                transform: root.transform
            }
        }
    }
};