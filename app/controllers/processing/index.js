import { getContract as getContractProcessing } from "../../contract/processingContract.js";

export const getAllIngress = async (req, res) =>{
    const contractProcessing = await getContractProcessing().catch((error) =>
        console.error(error)
    );
    try{
        contractProcessing.methods.getAllIngress()
        .call()
        .then((response)=>{
            res.status(200).json(response)
        })
    }catch(err){
        res.status(500).json({message: err.message});
    }
}