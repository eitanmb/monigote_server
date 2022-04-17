import { gql } from 'apollo-server';
import './db/dbConnection.js';
import Miembro from './models/Monigote';
import { IMiembro, IEstilos } from './types.js';

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
        miembro: async( _:any, args:IMiembro ) => {
            return await Miembro.findOne({ nombre: args.nombre });
        },

        miembros: async(_:any, args: IMiembro) => {
            return await Miembro.find({ nombre: { $in: args.nombre } });

        },

        monigote: async() => {
            return await Miembro.find({});

        }
    },

    Mutation: {
        agregarMiembro: (_:any, args: IMiembro) => {
            const { nombre, background, borderRadius, transform } = args;
            const miembro = new Miembro( { nombre, background, borderRadius, transform } );
            return miembro.save();
        },
    },

    Miembro: {
        estilos: ( root: IEstilos ) => {
            return {
                background: root.background,
                borderRadius: root.borderRadius,
                transform: root.transform
            }
        }
    }
};