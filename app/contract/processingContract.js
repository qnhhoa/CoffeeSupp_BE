import Web3 from "web3";

export const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "processingId",
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
        name: "category",
        type: "uint256",
      },
    ],
    name: "addInspector",
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
        name: "processorId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "listBatchId",
        type: "uint256[]",
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
    name: "addPreWarehouse",
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
        name: "processorId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "category",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "listBatchId",
        type: "uint256[]",
      },
    ],
    name: "addProcessing",
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
        name: "category",
        type: "uint256",
      },
    ],
    name: "addProcessor",
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
        name: "processingDatabaseContractAddress",
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
    name: "checkInspector",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
            name: "processingId",
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
    name: "getListPreWarehouse",
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
            name: "processorId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "listbatchId",
            type: "uint256[]",
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
        internalType: "struct PreWarehouse[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListProcessing",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "processingId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "processorId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "listBatchId",
            type: "uint256[]",
          },
        ],
        internalType: "struct Processing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListProcessor",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "processorId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "processorAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "category",
            type: "uint256",
          },
        ],
        internalType: "struct Processor[]",
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
  {
    inputs: [],
    name: "processingDatabase",
    outputs: [
      {
        internalType: "contract ProcessingDatabase",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const ADDRESS = "0xA44745fB2af9837FbF40C8001c8Fa387DEb6CbFa";

export async function getContract() {
  const provider = new Web3.providers.HttpProvider("https://ganache.ftisu.vn");
  const web3 = new Web3(provider);
  return new web3.eth.Contract(ABI, ADDRESS);
}
