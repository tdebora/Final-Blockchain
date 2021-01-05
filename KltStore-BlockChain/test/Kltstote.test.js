const Kltstore = artifacts.require('./Kltstore.sol');

 require('chai')
  .use(require('chai-as-promised'))
  .should();


contract('Kltstore', ([deployer, seller, buyer]) => {
  let kltstore;

  before(async () => {
    kltstore = await Kltstore.deployed()
  });

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await kltstore.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    });



    it('it has a name', async () => {
      const name = await kltstore.name();
      assert.equal(name, 'Dapp kltstore')
    })
  });

  describe('products', async () => {
    let result, productCounter;

    before(async () => {
      result = await kltstore.createProduct('Belnegres', web3.utils.toWei('1', 'Ether'), { from: seller });
      productCounter = await kltstore.productCounter()
    });
// create the product

    it('creates products', async () => {
      // SUCCESS
      assert.equal(productCounter, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), productCounter.toNumber(), 'id is correct');
      assert.equal(event.name, 'Belnegres', 'name is correct');
      assert.equal(event.category, 'black', 'category is correct');
      assert.equal(event.price, '1000000000000000000', 'price is correct');
      assert.equal(event.owner, seller, 'owner is correct');
      assert.equal(event.purchased, false, 'purchased is correct');

      // FAILURE: Product must have a name
      await await kltstore.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      await await kltstore.createProduct('Belnegres', 0, { from: seller }).should.be.rejected;
    });

// List the products

    it('list products', async ()=>{

      var product = await kltstore.products(productCounter);

      assert.equal(product.id.toNumber(), productCounter.toNumber(), 'id is correct');
      assert.equal(product.name, 'Belnegress', 'name is correct');
      assert.equal(product.category, 'Belnegress', 'category is correct');
      assert.equal(product.price, '1000000000000000000', 'price is correct');
      assert.equal(product.owner, seller, 'owner is correct');
      assert.equal(product.purchased, false, 'purchase is correct');
    });

  
// function of purchase a product
  it('sells products', async () => {
    // Track the seller balance before purchase
    let oldSellerBalance;
    oldSellerBalance = await web3.eth.getBalance(seller);
    oldSellerBalance = new web3.utils.BN(oldSellerBalance);
  
    // SUCCESS: Buyer makes purchase
    result = await kltstore.purchaseProduct(productCounter, { from: buyer, value: web3.utils.toWei('1', 'Ether')});
  
    // Check logs
    const event = result.logs[0].args;
    assert.equal(event.id.toNumber(), productCounter.toNumber(), 'id is correct');
    assert.equal(event.name, 'Belnegres', 'name is correct');
    assert.equal(event.category, 'black', 'category is correct');
    assert.equal(event.price, '1000000000000000000', 'price is correct');
    assert.equal(event.owner, buyer, 'owner is correct');
    assert.equal(event.purchased, true, 'purchased is correct');
  
    // Check that seller received funds
    let newSellerBalance;
    newSellerBalance = await web3.eth.getBalance(seller);
    newSellerBalance = new web3.utils.BN(newSellerBalance);
  
    let price;
    price = web3.utils.toWei('1', 'Ether');
    price = new web3.utils.BN(price);
  
    const exepectedBalance = oldSellerBalance.add(price);
  
    assert.equal(newSellerBalance.toString(), exepectedBalance.toString());
  
    // FAILURE: Tries to buy a product that does not exist, 
    await kltstore.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;      // FAILURE: Buyer tries to buy without enough ether
    
    // FAILURE: Buyer tries to buy without enough ether
    await kltstore.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
   
    // FAILURE: Deployer tries to buy the product, i.e., product can't be purchased twice
    await kltstore.purchaseProduct(99, { from: deployer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
    
    // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
    await kltstore.purchaseProduct(99, { from: deployer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
   })

  })

});