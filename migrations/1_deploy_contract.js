const Demo_Contract = artifacts.require("Counter");

module.exports = function(deployer) {
    deployer.deploy(Demo_Contract);
};