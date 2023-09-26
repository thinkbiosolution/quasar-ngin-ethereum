// Consent.sol
pragma solidity ^0.8.0;

contract Consent {
    struct DataPoint {
        uint userId;
        string consentInfo;
        uint timestamp;
    }

    DataPoint[] public dataPoints;

    function addDataPoint(uint _userId, string memory _consentInfo) public {
        dataPoints.push(DataPoint(_userId, _consentInfo, block.timestamp));
    }

    function getDataPointsCount() public view returns (uint) {
        return dataPoints.length;
    }
}

