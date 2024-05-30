import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MetamaskLogo from '../../assets/metamask-icon.png';
import PhantomLogo from '../../assets/phantom-icon.png';
import BraveLogo from '../../assets/brave-icon.png';
import CoinbaseLogo from '../../assets/coinbase-icon.png';
import './connect-wallet.css';

interface WalletButtonProps {
	imgSrc: string;
	altText: string;
	walletName: string;
}

interface IConnectWallet {
	isModalOpen: boolean;
	setModalOpen: (isOpen: boolean) => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({ imgSrc, altText, walletName }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<button className='WalletButton' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<img src={imgSrc} alt={altText} className='w-6 h-6 mr-3' />
			<p className={`'text-[#3D3D3D] ${isHover && 'text-[#4778FF]'} font-single mr-2 text-[18px]`}>{walletName}</p>
			<span className='text-[#C2C2C2] ml-auto text-gray-500 font-single text-[16px]'>(Detected)</span>
		</button>
	);
};

const ConnectWallet: React.FC<IConnectWallet> = ({ isModalOpen, setModalOpen }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			setOpen(true);
			setModalOpen(true);
		}
	}, [isModalOpen]);

	const onCloseModal = () => {
		setOpen(false);
		setModalOpen(false);
	};

	return (
		<Modal
			open={open}
			onClose={onCloseModal}
			center
			classNames={{
				overlay: 'customOverlay',
				modal: 'customModal'
			}}
		>
			<div className='Title'>
				<h2 className='text-[24px] font-single mb-4 text-center text-[#3D3D3D]'>Connect Wallet</h2>
			</div>
			<div className='space-y-3 WalletButtons'>
				<WalletButton imgSrc={MetamaskLogo} altText='Metamask' walletName='Metamask' />
				<WalletButton imgSrc={PhantomLogo} altText='Phantom' walletName='Phantom' />
				<WalletButton imgSrc={BraveLogo} altText='Brave Wallet' walletName='Brave Wallet' />
				<WalletButton imgSrc={CoinbaseLogo} altText='Coinbase' walletName='Coinbase' />
			</div>
			<div className='NoWallet flex justify-center'>
				<button className='text-[#A3A3A3] text-[16px] mt-4 text-gray-500 hover:underline font-single text-center'>
					I don't have wallet
				</button>
			</div>
		</Modal>
	);
};

export default ConnectWallet;