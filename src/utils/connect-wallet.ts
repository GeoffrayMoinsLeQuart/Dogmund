import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectToMetaMask = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  try {
    // Request MetaMask to connect
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Connect to user's address
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = provider.getSigner();

    return {
      provider,
      signer,
      address: accounts[0],
    };
  } catch (error) {
    console.error('Failed to connect to MetaMask', error);
    throw error;
  }
};
