import Web3 from "web3";

export const ABI =[
	{
		"inputs": [],
		"name": "getTest",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]
export const ADDRESS = "0x500c786E8eD3e1760eaFc9499de5a6cFCBBC9a4d";

export async function getContract() {
  const provider = new Web3.providers.HttpProvider("http://localhost:7545");
  const web3 = new Web3(provider);
  return new web3.eth.Contract(ABI, ADDRESS);
}
