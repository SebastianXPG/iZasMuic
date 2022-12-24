import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    "name": { type: String, required: true, minlength: 3, maxlength: 20, unique: true} ,
    "password": { type: String, required: true} ,
    telefono: { type: String, required: true, minlength: 6, maxlength: 16 },
    correo: { type: String, required: true, minlength: 6, maxlength: 30 },
})


// const opcCiudad = ["Bogota","Cali","Medellin","Cartagena"]
// const opcTipoDoc =["RC","TI","CC","NIT","CE"]
// const opcSnActivo=[1,0]
// const opcRol=["admin","cliente"]

// const userModel = mongoose.Schema({
// "usuario":{type:String,required:true,minlength:2, maxlength:16},
// "password":{type:String,required:true,minlength:8, maxlength:256},
// "tipo_doc":{type:String,required:true,enum:opcTipoDoc},
// "documento":{type:String,required:true,minlength:4, maxlength:30},
// "nombre": {type:String,required:true,minlength:8, maxlength:60},
// "direccion":{type:String,required:true,minlength:8, maxlength:60},
// "ciudad":{type:String,required:true,minlength:4,maxlength:60}, //add dic 13 
// "telefono":{type:String,required:true,minlength:6, maxlength:16},
// "correo":{type:String,required:true,minlength:6, maxlength:30},
// "sn_activo":{type:Boolean,required:true,default:1,enum:opcSnActivo},
// "rol":{type:String,required:true,enum:opcRol,default:"cliente"}
// })

//export default mongoose.model("users", userModel)
  export default mongoose.model("users", userSchema);