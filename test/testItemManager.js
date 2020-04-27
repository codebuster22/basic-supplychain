const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager",accounts => {
    it(".... Should be able add an Item",async function(){
        const itemManagerInstance = await ItemManager.deployed();
        const itemId = 101;
        const itemPrice = 500;

        const result = await itemManagerInstance.createItem(itemId,itemPrice, {from:accounts[0]});
        console.log(result);
        assert.equal(result.logs[0].args._itemIndex, 0, "It's not the first item");
    })
})