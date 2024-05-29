import React, { useEffect, useState } from 'react';
import ButtonDisconnect from './connection/button-disconnect';
import Button from './connection/button';
import Logo from '../assets/logo.png';
import Text from './connection/text';

const Navbar: React.FC = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isConnected) {
			setIsMenuOpen(false);
		}
	}, [isConnected]);

	console.log("isMenuOpen", isMenuOpen);
	console.log("isConnected", isConnected);

	return (
		<nav className='flex items-center justify-between bg-gray-800 p-4 max-w-[1140px] w-[100%] top-[52px] fixed'>
			<div className='flex items-center'>
				<img src={Logo} alt='Logo' className={`h-[48px] w-[48px] `} />
			</div>
			<div>
				{isConnected ? (
					<Text onClick={() => setIsConnected(!isConnected)} isMenuOpen={() => setIsMenuOpen(!isMenuOpen)}>
						0x8e...036Fe
					</Text>
				) : (
					<Button onClick={() => setIsConnected(!isConnected)}>Connect</Button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
