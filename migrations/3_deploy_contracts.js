var VoteRecord = artifacts.require("./VoteRecord.sol");

module.exports = function(deployer) {
  deployer.deploy(VoteRecord);
};
