// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint public tokenCount;
    address public owner;

    constructor() ERC721("Tour NFT", "TOUR") {
        owner = msg.sender;
    }

    function mint(string memory _tokenURI, address to) external returns(uint) {
        tokenCount++;
        _safeMint(to, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);

        return (tokenCount);
    }

    function getUserNFTs(address a) public view returns(string[] memory) {
        string[] memory userNFTs = new string[](balanceOf(a));
        uint index = 0;
        for (uint i = 1; i <= tokenCount; i++) {
            if (ownerOf(i) == a) {
                userNFTs[index] = tokenURI(i);
                index++;
            }
        }
        return userNFTs;
    }
}