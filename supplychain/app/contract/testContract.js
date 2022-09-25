import Web3 from "web3";

export const ABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "batchNo",
				"type": "uint256"
			},
			{
				"name": "inspectorNo",
				"type": "uint256"
			},
			{
				"name": "contentOfHumus",
				"type": "uint256"
			},
			{
				"name": "farmerNo",
				"type": "uint256"
			},
			{
				"name": "checkingTime",
				"type": "uint256"
			},
			{
				"name": "coffeeFamily",
				"type": "string"
			},
			{
				"name": "typeOfSeed",
				"type": "string"
			},
			{
				"name": "fertilizerUsed",
				"type": "string"
			}
		],
		"name": "setKiemDinhData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "Added",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "batchNo",
				"type": "uint256"
			}
		],
		"name": "getKiemDinhData",
		"outputs": [
			{
				"name": "inspectorNo",
				"type": "uint256"
			},
			{
				"name": "contentOfHumus",
				"type": "uint256"
			},
			{
				"name": "farmerNo",
				"type": "uint256"
			},
			{
				"name": "checkingTime",
				"type": "uint256"
			},
			{
				"name": "coffeeFamily",
				"type": "string"
			},
			{
				"name": "typeOfSeed",
				"type": "string"
			},
			{
				"name": "fertilizerUsed",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
export const ADDRESS = "0xd282BA682D87e7490f89eDD7Da10566901b9782B";

export async function getContract() {
  const provider = new Web3.providers.HttpProvider("http://localhost:7545");
  const web3 = new Web3(provider);
  return new web3.eth.Contract(ABI, ADDRESS);
}
