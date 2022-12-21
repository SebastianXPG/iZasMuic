import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

export async function createUser(req, res) {
  try {
    const { user } = req.body;
    let { password } = user;

    password = await bcrypt.hash(password, 10);
    user.password = password;

    const document = await userModel.create(user);

    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export function getUser(req, res) {}

export function updateUser(req, res) {}

export function deleteUser(req, res) {}


//CRUD
//CREATED
// export async function createUser(req, res){
//   try{
//         const usuario =req.body.usuario
//         const { password } = usuario;
//         const encriptedPassword = await bcrypt.hash(password, 10) 
//         usuario.password = encriptedPassword
//         const documento = await userModel.create(usuario)        
//         res.status(201).json(documento); 
//     } catch(error) {
//         res.status(400).json(error.message)
//         return;  
//     }
// }


//READ
//  export async function readUser(req, res){
//     const id = req.params.id
//     let documento
//     try {
//         documento = await userModel.find({"_id":id})
//         //documento = await userModel.findOne({ _id: id });  si no fun bien este puede servir
//     } catch (error) {
//         res.status(400).json(error.message)
//         return ;         
//     }
//     res.status(200).json(documento)
// }


//Lista Usuarios
// export async function userList(req, res) {
//   let documento;
//   try {
//     documento = await userModel.find({},{_id: 0, __v: 0, password: 0});
//   } catch (error) {
//     res.status(400).json(error.message);
//     return;
//   }
//   res.status(200).json(documento);
// }

//UPDATE
//export async function updateUser(req, res){
//     const id = req.params.id
//     const updates = req.body.updates
//     let documento = null
//     try {
//         documento = await userModel.updateOne({"_id":id},updates)
//     } catch (error) {
//         res.status(400).json(error.message)
//         return;
//     }
//     res.sendStatus(200).json(documento)
// }

//DELETE
//export async function deleteUser(req, res){
//   const id = req.body.id; //cuerpo
//   let documento = null;
//   try {
//     documento = await userModel.deleteOne({ _id: id });
//   } catch (error) {
//     res.status(400).json(error.message);
//     return;
//   }
//   res.status(200).json(documento);
 //}
