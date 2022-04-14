import { gql } from 'apollo-server';
import './db/dbConnection.js';
import Miembro from './models/Monigote.js';


export const typeDefs = gql`

    type Estilos {
        background: String
        border_radius: String
        margin: String
        transform: String
    }

    type Miembro {
        nombre: String
        estilos: Estilos
    }

    type Query {
        miembros(nombre:[String]!): [Miembro]
        miembro(nombre:String!): Miembro
    }

    type Mutation {
        agregarMiembro(
            nombre: String
            background: String
            border_radius: String
            margin: String
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

        } 
    },

    Mutation: {
        agregarMiembro: (root, args ) => {
            const { nombre, background, border_radius, margin, transform } = args;
            const miembro = new Miembro( { nombre, background, border_radius, margin, transform } );
            return miembro.save();
        },
    },

    Miembro: {
        estilos: ( root ) => {
            return {
                background: root.background,
                border_radius: root.border_radius,
                margin: root.margin,
                transform: root.transform
            }
        }
    }
};