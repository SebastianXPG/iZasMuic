import prodModel from "../models/prodModel.js"


//CRUD
//CREATED
export async function createProd(req, res) {
  const producto = req.body.producto;
  let documento;
  try {
    documento = await prodModel.create(producto);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(201).json(documento);
}
//     const producto =req.body.producto
//     let documento
//     try{
//         documento = await prodModel.create(producto)        
//     } catch(error) {
//         res.status(400).json(error.message)
//         return;  
//     }
//     res.status(201).json(documento)  
// }




//READ
// export async function readProd(req, res) {
//   const nompro = req.params.nompro;
//   let documento;
//   try {
//     documento = await prodModel.find({ nompro: nompro });
//   } catch (error) {
//     res.status(400).json(error.message);
//     return;
//   }
//   res.status(200).json(documento);
// }

 export async function readProd(req, res){
     const { nompro } = req.params

     try {
         const documents = await prodModel.find({
             $or: [
                 { codpro: nompro },
                 { nompro: nompro }
             ]
         })
         res.status(200).json(documents)
     } catch (error) {
         res.status(400).json(error.message)
     }
 }


//         const id = req.params.id
//     let documento
//     try {
//         documento = await prodModel.find({"_id":id})
//     } catch (error) {
//         res.status(400).json(error.message)
//         return ;        
//     }
//     res.status(200).json(documento)
// }

//UPDATE
export async function updateProd(req, res){

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await  prodModel.updateOne({ _id: id }, updates);
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    
    res.sendStatus(200).json(documento)
}

//DELETE
export async function deleteProd(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento= null

    try {
        documento = await prodModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}