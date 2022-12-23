import { getContract as getContractUser } from "../../contract/userContract.js";

export const login = async (req, res) => {
    const contractUser = await getContractUser().catch((error) =>
        console.error(error)
    );
    try{
        await contractUser.then((contract) =>{
            contract.methods.login().call({
              from: req.body.address
                }).then((response) => {
                    res.status(200).json({message: "Login successfully!"})
                    console.log('response', response)
                })
                .catch((error) => {
                    console.error(error);
                });
            })

    } catch(e){
        res.status(500).json({ message: "Login error!" });
        // res.status(500).json(e);
    }
    res.end();
}

export const getAllUser = async (req, res) => {
    const contractUser = await getContractUser().catch((error) =>
        console.error(error)
    );
    try {
        await contractUser.methods.getAllUser()
        .call()
        .then((response)=>{
            res.status(200).json(response)
        }).catch((error)=>{
            console.log('error',error)
            res.status(200).json({ message: "Error 200"})
        })
    }catch(e) {
        console.log('e',e)
        res.status(500).json({ message: "Error!!!"})
    }
}