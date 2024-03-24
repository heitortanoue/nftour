// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TourCoin is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("TourCoin", "TRC") {
        owner = msg.sender;
        _mint(msg.sender, initialSupply);
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function mint(uint amount) onlyOwner public {
        uint newValue = amount * 1e18;
        _mint(owner, newValue);
    }

    function transferCoin(address to, uint256 value) public virtual returns (bool) {
        uint newValue = value * 1e18;
        return transfer(to, newValue);
    }

    // Added function to burn tokens
    function burn(address from, uint256 amount) public {
        uint newValue = amount * 1e18;
        _burn(from, newValue); // `_burn` is an internal function that reduces the balance and total supply.
    }
}