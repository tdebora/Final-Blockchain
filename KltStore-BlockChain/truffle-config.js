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
