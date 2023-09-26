// server.js
const express = require('express');
const Web3 = require('web3');

const app = express();
const port = 3000;

const web3 = new Web3('YOUR_ETHEREUM_NODE_URL'); // Replace with an Ethereum node URL

// Load contract ABI and address here
const contractABI = [...]; // Replace with your ABI
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(express.json());

// Endpoint to add data points
app.post('/addDataPoint', async (req, res) => {
    const { userId, consentInfo } = req.body;
    
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.addDataPoint(userId, consentInfo).send({ from: accounts[0] });
        res.status(200).send('Data point added successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data point.');
    }
});

// Endpoint to retrieve data points for a user ID
app.get('/getDataPoints/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
    
    try {
        const dataPoints = await contract.methods.getDataPointsCount().call();
        const userEntries = [];

        for (let i = 0; i < dataPoints; i++) {
            const entry = await contract.methods.dataPoints(i).call();
            if (entry.userId === userId) {
                userEntries.push(entry);
            }
        }

        res.status(200).json(userEntries);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data points.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
