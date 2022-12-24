import entrModel from "../models/entrModel.js"

//CRUD
//CREATED
export async function createEntr(req, res){
    //IMPLEMENTACION AQUI
    //const {nombre, edad, ciudad} = req.body.usuario
    const entrega =req.body.entrega

    // if(usuario==null){
    //     res.status(400).json({
    //         "error":"Falta el objeto usuario en el cuerpo de la petición."
    //     })
    //     return        
    // }

    let documento

    try{
        documento = await entrModel.create(entrega)        
    } catch(error) {
        res.status(400).json(error.message)
        return;  
    }

    res.status(201).json(documento)  
}

//READ
export async function readEntr(req, res){
    //IMPLEMENTACION AQUI
    const id = req.params.id

    let documento
    
    try {
        documento = await entrModel.find({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return ;         
    }

    res.status(200).json(documento)
}

//UPDATE
export async function updateEntr(req, res){

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await entrModel.updateOne({"_id":id},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    
    res.sendStatus(200).json(documento)
}

//DELETE
export async function deleteEntr(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento= null

    try {
        documento = await entrModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}