import mongoose from 'mongoose';
import { IMiembro } from '../types';

const miembroSchema = new mongoose.Schema<IMiembro>( {
    nombre: {
        type: String,
        unique: true,
        require:true
    },
    background: {
        type: String,
        require:true
    },
    borderRadius: {
        type: String,
        require:true
    },
    transform: {
        type: String,
        require:false
    }
});

const Miembro = mongoose.model<IMiembro>('Miembro', miembroSchema );
export default Miembro;
// export default mongoose.model('Miembro', miembroSchema );