import mongoose from 'mongoose';

const miembroSchema = new mongoose.Schema( {
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


export default mongoose.model('Miembro', miembroSchema );




