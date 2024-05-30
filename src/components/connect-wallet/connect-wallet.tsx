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
	return (
		<button className='WalletButton'>
			<img src={imgSrc} alt={altText} className='w-6 h-6 mr-3' />
			<p className='font-single mr-2  text-[18px]'>{walletName}</p>
			<span className='ml-auto text-gray-500 font-single text-[16px]'>(Detected)</span>
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
			<h2 className='text-xl font-single mb-4'>Connect Wallet</h2>
			<div className='space-y-3 WalletButtons'>
				<WalletButton imgSrc={MetamaskLogo} altText='Metamask' walletName='Metamask' />
				<WalletButton imgSrc={PhantomLogo} altText='Phantom' walletName='Phantom' />
				<WalletButton imgSrc={BraveLogo} altText='Brave Wallet' walletName='Brave Wallet' />
				<WalletButton imgSrc={CoinbaseLogo} altText='Coinbase' walletName='Coinbase' />
			</div>
			<button className='mt-4 text-gray-500 hover:underline font-single'>I don't have wallet</button>
		</Modal>
	);
};

export default ConnectWallet;
