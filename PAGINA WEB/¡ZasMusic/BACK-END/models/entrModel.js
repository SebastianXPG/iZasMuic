import mongoose from "mongoose";

const opcTipoDoc =["RC","TI","CC","NIT","CE"]
const opcSnActivo=[1,0]
const opcPago=["EFECTIVO","T.DEBITO","T.CREDITO","TRANSFERENCIA"]

const entrModel = mongoose.Schema({

    "tipo_doc":{type:String,required:true,enum:opcTipoDoc},
    "documento":{type:String,required:true,minlength:1, maxlength:30},
    "cod_producto":{type:String,required:true,minlength:1, maxlength:16},
    "nom_producto":{type:String,required:true,minlength:1, maxlength:30},
    "cantidad":{type:Number,required:true,min:0,max:10000},
    "nro_factura":{type:String,required:true,min:1,max:10000},
    "fecha_factura":{type:Date,required:true,},
    //llevo las dos y end
    "sn_despacho":{type:Boolean,required:true,default:0},
    "dir_entrega":{type:String,required:true,minlength:1, maxlength:60}
})

export default mongoose.model("entregas", entrModel)
