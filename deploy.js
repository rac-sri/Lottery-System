const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "bird carpet pudding trick vacant rough fatal debate enact problem thrive enhance",
  "https://rinkeby.infura.io/v3/3dc8b2e3489c4260904f45a4e74a56dc"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  let contract = new web3.eth.Contract(JSON.parse(interface));

  const result = await contract
    .deploy({ data: "0x" + bytecode })
    .send({ gas: 3000000, from: accounts[0] });

  console.log(interface);
  console.log("contract deployed to : " + result.options.address);
};

deploy();
