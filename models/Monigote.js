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
    border_radius: {
        type: String,
        require:true
    },
    margin: {
        type: String,
        require:false
    },
    transform: {
        type: String,
        require:false
    }
});


export default mongoose.model('Miembro', miembroSchema );




