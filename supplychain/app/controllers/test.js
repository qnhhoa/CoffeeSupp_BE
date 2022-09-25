import { getContract } from "../contract/testContract.js"

export async function getTest (req, res){
    // req.body.id
 
    try{
        const name =req.query.name
        const id = req.params.id
        await getContract().then(async contract =>{
            await contract.methods.getKiemDinhData(id).call().then(success => {
                res.status(200).json({success: success, id, name})
            }).catch(error => console.error(error))
        })
        .catch(err => console.error(err));
    
    } catch(err){
        res.status(500)
        res.end()
    }
    res.end()
}