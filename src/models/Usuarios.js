import { model, Schema } from "mongoose";

const usuariosSchema = new Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    rol: {
        type:String,
        required:true,
        trim:true,
    }
})

export default model('Usuarios', usuariosSchema)