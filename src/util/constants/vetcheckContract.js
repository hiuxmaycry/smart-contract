const address = '0x73031b44c5f178a9ca2abb05ec925517a5faccd9';
const ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "d",
        "type": "uint8"
      },
      {
        "name": "m",
        "type": "uint8"
      },
      {
        "name": "y",
        "type": "uint16"
      }
    ],
    "name": "setDateAntiRabies",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "d",
        "type": "uint8"
      },
      {
        "name": "m",
        "type": "uint8"
      },
      {
        "name": "y",
        "type": "uint16"
      }
    ],
    "name": "setDateParasitic",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "setHeight",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "bytes32"
      }
    ],
    "name": "setName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "setWeight",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "w",
        "type": "uint256"
      },
      {
        "name": "h",
        "type": "uint256"
      }
    ],
    "name": "setWeightAndHeight",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDateAntiRabies",
    "outputs": [
      {
        "name": "d",
        "type": "uint8"
      },
      {
        "name": "m",
        "type": "uint8"
      },
      {
        "name": "y",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDateParasitic",
    "outputs": [
      {
        "name": "d",
        "type": "uint8"
      },
      {
        "name": "m",
        "type": "uint8"
      },
      {
        "name": "y",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getHeight",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getName",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getWeight",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getWeightAndHeight",
    "outputs": [
      {
        "name": "w",
        "type": "uint256"
      },
      {
        "name": "h",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export {address, ABI};

