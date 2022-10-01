import { getContract as getContractFarmer } from "../contract/farmerContract.js";

export async function getTest(req, res) {
  try {
    await getContractFarmer()
      .then(async (contractFarmer) => {
        await contractFarmer.methods
          .getListFarmer()
          .call()
          .then((success) => {
            res.status(200).json(success);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => console.error(error));
  } catch (err) {
    res.status(500);
    res.end();
  }
  res.end();
}
