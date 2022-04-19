# monigote_server

Typescript Apollo GraphQL Server con conexión a MongoDB. Devuelve la información necesaria para manipular al Monigote desde la aplicación cliente.



### Node Version

v14.17.5



### Para instalar dependencias

`npm install`



### Para generar el build de producción

`npm run generate`



### Carpeta destino del build

dist



### Base de Datos

1. Crear base de datos en Mongodb



### Variables de entorno

- DB_CNN=<datos para la conexión a la base de datos creada>

- PORT=4000 (Para conexión local)



### Introducir la informacion del Monigote en la base de datos

- Ejectuar la siguiente mutación de GraphQL:

    `mutation($nombre: String!, $background: String!, $borderRadius: String!, $transform: String) {
        agregarMiembro(nombre: $nombre, background: $background, borderRadius: $borderRadius, transform: $transform) {
            id
            nombre
            estilos {
                background
                borderRadius
                transform
            }
        }
    }`

    Con las variables:

    1. 
    `
        {
            "nombre": "head",
            "background": "#68cc83",
            "borderRadius": "52% 48% 49% 51% / 28% 29% 71% 72% "
        }
        `

    2.  
    `
        {
            "nombre": "lArm",
            "background": "#68cc83",
            "borderRadius": "49% 51% 47% 53% / 38% 41% 59% 62%",
            "transform": "rotate(15deg)"
        }
        `

    3. 
    `
        {
            "nombre": "rArm",
            "background": "#68cc83",
            "borderRadius": "49% 51% 47% 53% / 38% 41% 59% 62%",
            "transform": "rotate(-15deg)"
        }
        `

    4. 
    `
        {
            "nombre": "lLeg",
            "background": "#68cc83",
            "borderRadius": "51% 47% 53% / 38% 41% 59% 62%",
            "transform": "rotate(10deg)"
        }
     `

    5. 
    `
        {
            "nombre": "rLeg",
            "background": "#68cc83",
            "borderRadius": "51% 47% 53% / 38% 41% 59% 62%",
            "transform": "rotate(-10deg)"
        }
        `

    6. 
    `
        {
            "nombre": "body",
            "background": "#68cc83",
            "borderRadius": "50% 50% 50% 50% / 3% 3% 97% 97%"
        }
        `