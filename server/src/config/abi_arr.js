module.exports = {
  ABI = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        },
        {
          "name": "_brand",
          "type": "string"
        },
        {
          "name": "_model",
          "type": "string"
        },
        {
          "name": "_status",
          "type": "uint256"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_manufactuerName",
          "type": "string"
        },
        {
          "name": "_manufactuerLocation",
          "type": "string"
        },
        {
          "name": "_manufactuerTimestamp",
          "type": "string"
        }
      ],
      "name": "createCode",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        }
      ],
      "name": "getProductDetails",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
}