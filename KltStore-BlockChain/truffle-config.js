<<<<<<< HEAD
import 'babel-register';
import 'babel-polyfill';

export const networks = {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*" // Match any network id
  },
};
export const contracts_directory = './src/contracts/';
export const contracts_build_directory = './src/abis/';
export const compilers = {
  solc: {
    version: "0.5.0",
  }
};
=======
require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
     version: "0.5.0", // Fetch exact version from solc-bin (default:       truffle’s version)
    }
   }
  
}

}
>>>>>>> 6bdf64477a3b1b1b03a8fa82169fd05fdae9e07a
