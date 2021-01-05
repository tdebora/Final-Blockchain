if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
    web3 = new Web3(web3.currentProvider);
  } else {
    // If no injected web3 instance is detected, fallback to Ganache CLI.
    App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:8545');
    web3 = new Web3(App.web3Provider);
  }