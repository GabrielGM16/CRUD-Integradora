import {Schema, model} from "mongoose";

const noticiasSchema = new Schema({

    nameNoticias:{
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
   fechCreacion:
   {
       type:Date,
       required:true,
       
   },
   visiblidad:{
       type:Boolean,
       required:true,
       trim:true,
   }
   ,
   img:[
    {
      type: String,
      required: true,
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

export default model('Noticias',noticiasSchema)