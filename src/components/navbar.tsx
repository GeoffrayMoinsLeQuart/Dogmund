import React, { useEffect, useState } from 'react';
import useHover from '../hooks/useHover';
import Button from './connection/button';
import Logo from '../assets/logo.png';
import Text from './connection/text';

interface INavbar {
  onOpenModal: (isOpen: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ onOpenModal }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsMenuOpen(false);
    }
  }, [isConnected]);

  return (
    <nav className='flex items-center justify-between p-4 max-w-[1140px] w-full pt-[32px]'>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' className='h-12 w-12' />
      </div>
      <div>
        {isConnected ? (
          <Text onClick={() => setIsConnected(!isConnected)} isMenuOpen={() => setIsMenuOpen(!isMenuOpen)}>
            0x8e...036Fe
          </Text>
        ) : (
          <Button
            onClick={() => {
              setIsConnected(!isConnected);
              onOpenModal(true);
            }}
          >
            Connect
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
