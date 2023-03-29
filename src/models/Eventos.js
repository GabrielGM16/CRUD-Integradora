import {Schema, model} from "mongoose";

const eventosSchema = new Schema({

    nameEvento:{
       type:String,
       required:true,
       trim:true,
   },
   contenidoEsp:{
       type:String,
       required:true,
       trim:true
   },
   contenidoEng:
   {
       type:String,
       required:true,
       
   },   
   fechaCreacion:
   {
       type:Date,
       required:true,
       
   },
   fechaInicio:
   {
       type:Date,
       required:true,
       
   },   
   fechaFin:
   {
       type:Date,
       required:true,
       
   },
   visiblidad:{
       type:Boolean,
       required:true,
       
   }
   ,
   img:[
    {
      type: String,
      required: true,
      trim:true,
    },
  ],
   creador: {
  
    type:String,
    required:true,
    trim:true,

    }
   

},
{
   versionKey:false,
});

export default model('Eventos',eventosSchema)