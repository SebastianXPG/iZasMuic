import ventModel from "../models/ventModel.js"

//CRUD
//CREATED
export async function createVent(req, res){
    //IMPLEMENTACION AQUI
    //const {nombre, edad, ciudad} = req.body.usuario
    const venta =req.body.ventanas

    // if(usuario==null){
    //     res.status(400).json({
    //         "error":"Falta el objeto usuario en el cuerpo de la petición."
    //     })
    //     return        
    // }

    let documento

    try{
        documento = await ventModel.create(venta)        
    } catch(error) {
        res.status(400).json(error.message)
        return;  
    }

    res.status(201).json(documento)  
}


//READ
export async function readVent(req, res){
    //IMPLEMENTACION AQUI
    const id = req.params.id  
    let documento
    
    try {
        documento = await ventModel.find({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return ;         
    }

    res.status(200).json(documento)
}



//UPDATE
export async function updateVent(req, res){

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await ventModel.updateOne({"_id":id},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    
    res.sendStatus(200).json(documento)
}

//DELETE
export async function deleteVent(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id   //por el cuerpo
    
    let documento= null

    try {
        documento = await ventModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}