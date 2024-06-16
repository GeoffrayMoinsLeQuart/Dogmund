import React, { createContext, useState, useContext, ReactNode } from 'react';

interface EthereumContextProps {
  address: string | null;
  setAddress: (address: string | null) => void;
  disconnect: () => void;
}

const EthereumContext = createContext<EthereumContextProps | undefined>(undefined);

export const EthereumProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  const disconnect = () => {
    console.log('Disconnecting wallet');
    setAddress(null);
  };

  return (
    <EthereumContext.Provider value={{ address, setAddress, disconnect }}>
      {children}
    </EthereumContext.Provider>
  );
};

export const useEthereum = () => {
  const context = useContext(EthereumContext);
  if (!context) {
    throw new Error('useEthereum must be used within an EthereumProvider');
  }
  return context;
};
