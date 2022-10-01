import Web3 from "web3";

export const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
    ],
    name: "addFarmer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prepareId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "addFolWarehouse",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "farmerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "plantId",
        type: "uint256",
      },
    ],
    name: "addHarvest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "farmerId",
        type: "uint256",
      },
      {
        internalType: "enum CATEGORY",
        name: "category",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "testTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "area",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "production",
        type: "uint256",
      },
    ],
    name: "addPlant",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "farmerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "listHarvestId",
        type: "uint256[]",
      },
    ],
    name: "addPrepare",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "farmerDatabaseContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "farmerDatabase",
    outputs: [
      {
        internalType: "contract FarmerDatabase",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListFarmer",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "farmerId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "farmerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
        ],
        internalType: "struct Farmer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListFolWarehouse",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "batchId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "prepareId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        internalType: "struct FolWarehouse[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListHarvest",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "harvestId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "plantId",
            type: "uint256",
          },
        ],
        internalType: "struct Harvest[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListPlant",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "plantId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmerId",
            type: "uint256",
          },
          {
            internalType: "enum CATEGORY",
            name: "category",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "testTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "area",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "production",
            type: "uint256",
          },
        ],
        internalType: "struct Plant[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListPrepare",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "prepareId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "farmerId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "listHarvestId",
            type: "uint256[]",
          },
        ],
        internalType: "struct Prepare[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const ADDRESS = "0x8A1543C031Df59682B6C7F7B65A990190a94F61D";

export async function getContract() {
  const provider = new Web3.providers.HttpProvider(
    "https://ganache.ftisu.vn"
  );
  const web3 = new Web3(provider);
  return new web3.eth.Contract(ABI, ADDRESS);
}
