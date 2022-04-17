export interface IMiembro extends IEstilos {
    nombre: string
}

export interface IEstilos {
    background: string,
    borderRadius: string,
    transform?: string
}


// 1. Create an interface representing a document in MongoDB.
interface IMiembroSchema {
    name: string;
    email: string;
    avatar?: string;
  }