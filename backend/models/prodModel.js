import mongoose from "mongoose";

//  const prodModel = mongoose.Schema({
//     "cod_producto":{type:String,required:true,minlength:2,maxlength:10},
//     "nom_producto":{type:String,required:true,maxlength:30},
//     "cantidad":{type:Number,required:true,min:0,max:100000},
//     "valor_unidad":{type:Number,required:true,min:0,max:10000000000},
//     "pedido":{type:Number,required:true,min:0,max:10000000}
//     //,"fec_pedido":{type:Date,required:true,FormData:"dd/mm/yyyy"}
// })


const prodModel = mongoose.Schema({
    "codpro":{type:String,required:true,minlength:2,maxlength:10},
    "nompro":{type:String,required:true,maxlength:30},
    "valor":{type:Number,required:true,min:0,max:10000000000},
    //,"fec_pedido":{type:Date,required:true,FormData:"dd/mm/yyyy"}
})


export default mongoose.model("productos", prodModel)
