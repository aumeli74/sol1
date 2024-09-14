// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Oracle {

  address  owner;
  uint public numMeteoritos;

  event __callbackNewData();

  constructor() public {       
       owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor       
  }

     // modifier to check if caller is owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
      
    function update() public isOwner {
      emit   __callbackNewData();
    }

    function setNumMeteoritos(uint __num) public  isOwner() {
      numMeteoritos = __num;
    }
}
