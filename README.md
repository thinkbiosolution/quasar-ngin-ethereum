
## Install Ethereum development environment

### Install Node.js
* Visit the official Node.js website (https://nodejs.org/ ).
* Download the LTS (Long Term Support) version for Windows.
* Run the installer and follow the installation instructions. Make sure to include npm (Node Package Manager).

### Install Git (Optional but recommended)
* Download Git from the official website (https://git-scm.com/download/win ).
* Run the installer and follow the installation instructions.	

### Install Truffle
* Open a Command Prompt or PowerShell window.
* Install Truffle globally using npm:Setting up the Ethereum Blockchain	

`npm install -g truffle`

### Install Ganache
* Visit the Ganache website (https://www.trufflesuite.com/ganache ).
* Download the Windows version of Ganache.
* Run the installer and follow the installation instructions.

### Install MetaMask
* Open the web browser and go to the MetaMask website (https://metamask.io/) 
* Click the "Download" button and select "Install MetaMask for Chrome”
* Follow the browser-specific instructions to install the MetaMask extension.

### Set up Ganache
* Launch Ganache from the Start Menu.
* Use the default workspace or create a new one.
* Make note of the RPC server endpoint (e.g., http://127.0.0.1:7545 ) as we’ll need this to connect Truffle and MetaMask to Ganache.

Now, we have Truffle, Ganache, and MetaMask installed and set up. We can start developing Ethereum smart contracts and decentralized applications (DApps).

## Setting up the Ethereum Blockchain

###	Create a New Ethereum Project (Truffle)
* In a command prompt or terminal, navigate to the directory where we want to create the Ethereum project.
* Run the following command to create a new Truffle project	
```bash 
# Create a new Truffle project
mkdir ethereum-consent
cd ethereum-consent
truffle init
```

### Connect MetaMask to Ganache
* Open the browser with the MetaMask extension installed.
* Click the MetaMask icon in the browser's toolbar.
* Click "Import wallet" or "Create a wallet" and follow the setup instructions.
* Click the network dropdown (it will likely be set to "Ethereum Mainnet" by default) and select "Custom RPC."
* Enter the Ganache RPC server endpoint noted earlier (e.g., http://127.0.0.1:7545 ) as the "New RPC URL."

### Define smart contract
Create a new smart contract in the contracts directory, e.g., `Consent.sol`. This contract will define how consent information is stored.

### Compile and migrate smart contract

```bash 
truffle compile
truffle migrate
```


## Set up server environment

We need a server to interact with the Ethereum blockchain.

* Initialize a Node.js project and install necessary packages

	```bash
	mkdir ethereum-api
	cd ethereum-api
	npm init
	npm install express web3
	```

* Create a server script (e.g., server.js) to interact with the Ethereum smart contract.
* Setting up the API

	Replace `'YOUR_ETHEREUM_NODE_URL'`, `contractABI`, and `'YOUR_CONTRACT_ADDRESS'` with the appropriate values for the Ethereum environment and smart contract. This script sets up two endpoints: `/addDataPoint for adding data points` and `/getDataPoints/:userId` for retrieving data points for a specific user ID.


## Running the Application
Now, we can start the server and API.
```bash 
# Start the Ethereum blockchain (using Ganache)
# Compile and migrate smart contract (Truffle)
# Set up the server (Node.js)
cd ethereum-api
node server.js
```



