# MarketBlockChain

# Ethereum Decentralized application
This document provides you the guidance on how to create a decentralized application and test on ethereum blockchain network by using Ganache and I wrote the test-case under the test folder.



##### Tools and Frameworks
We are using following tools and frameworks for this application
* [truffle](https://www.trufflesuite.com/) - as development tool.
* [Ganache](https://www.trufflesuite.com/ganache) - as ethereum development test network.
* [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) - as Web3 Api injector
* [angular-cli](https://cli.angular.io/) - as framework for web client application.
* [Chai](https://www.npmjs.com/package/chai) - as javaScript frameworks commonly used for unit testing.


The steps are
- Download and Install Ganache
- Install truffle by [NPM](https://www.npmjs.com/package/truffle)
- Create truffle project structure
- Create smart contract [Solidity](https://solidity.readthedocs.io/en/v0.5.12/)
- Compile and deploy the smart contract
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
- Interact with blockchain with smart contract method

##### 1. Install Ganache
Download and install ganache based on your OS. ganache comes guid and cli mode. lets use gui one now
http://truffleframework.com/ganache/
If you open ganache after install, you can see 10 fake ethereum accounts with balance of 100 ether  for each  account.

##### 2. Truffle Project
install truffle and Create truffle project

Commands:
  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
```
##### 3. Create simple smart contract
Now I create smart contract file. we use solidity as smart contract programming language version ^0.5.0.
The purpose of this contract is to initiate a state variable in the blockchain and manipulating that value of that variable by invoking our smart contract method from a dapp.




Now ready to the serve the app

