import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

export default async function login(req, res){

    try{
        /*const {user, password} = req.headers*/
        const { user, password } = req.body;

        //console.log("jlara user y password" + user, password)


        const document = await userModel.findOne({"nombre":user})

        if (document != null){
          const documentPassword = document?.password;
          const acces = await bcrypt.compare(password, documentPassword);

          if (acces) {
            res.json({ message: "Bienvenido" });
            //console.log("Bienvenido");
          }
        }   else {
                res.status(401).json(error.message)
        } 

    } catch(error){
        res.status(401).json(error.massage)
    }
    


}