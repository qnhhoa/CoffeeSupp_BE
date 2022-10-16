import { getContract as getContractFarmer } from "../../contract/farmerContract.js";

export const getFarmer = async (req, res) => {
  try {
    const id = req.params.id;
    const contractFarmer = await getContractFarmer().catch((error) =>
      console.error(error)
    );
    await contractFarmer.methods
      .getListFarmer()
      .call()
      .then((success) => {
        let result;
        success.forEach((value, index) => {
            if (parseInt(value["farmerId"]) == id) result = { ...value };
        });
        res.json(result);
      })
      .catch((error) => console.error(error));
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json({ messages: "error" });
  }
  res.end();
};

export const getPlant = async (req, res) => {
  try {
    const id = req.params.id;
    const contractFarmer = await getContractFarmer().catch((error) =>
      console.error(error)
    );
    await contractFarmer.methods
      .getListPlant()
      .call()
      .then((success) => {
        let result;
        success.forEach((value, index) => {
            if (parseInt(value["plantId"]) == id) result = { ...value };
        });
        res.json(result);
      })
      .catch((error) => console.error(error));
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json({ messages: "error" });
  }
  res.end();
};


export const getHavest = async (req, res) => {
  try {
    const id = req.params.id;
    const contractFarmer = await getContractFarmer().catch((error) =>
      console.error(error)
    );
    await contractFarmer.methods
      .getListHarvest()
      .call()
      .then((success) => {
        let result;
        success.forEach((value, index) => {
            if (parseInt(value["harvestId"]) == id) result = { ...value };
        });
        res.json(result);
      })
      .catch((error) => console.error(error));
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json({ messages: "error" });
  }
  res.end();
};

export const getPrepare = async (req, res) => {
  try {
    const id = req.params.id;
    const contractFarmer = await getContractFarmer().catch((error) =>
      console.error(error)
    );
    await contractFarmer.methods
      .getListPrepare()
      .call()
      .then((success) => {
        let result;
        success.forEach((value, index) => {
            if (parseInt(value["prepareId"]) == id) result = { ...value };
        });
        res.json(result);
      })
      .catch((error) => console.error(error));
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json({ messages: "error" });
  }
  res.end();
};
