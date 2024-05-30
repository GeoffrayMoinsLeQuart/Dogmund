import { useState } from 'react';
import './App.css';
import ConnectWallet from './components/connect-wallet/connect-wallet';
import Navbar from './components/navbar';
import Title from './components/title';

function App() {
	const [isOpenModal, setIsOpenModal] = useState(true);

	return (
		<div className='flex justify-center items-center'>
			<div className='xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%]'>
				<Navbar onOpenModal={() => setIsOpenModal(!isOpenModal)}/>
				<Title />
				<ConnectWallet isModalOpen={isOpenModal} setModalOpen={ (isOpen) =>  setIsOpenModal(isOpen)}/>
			</div>
		</div>
	);
}

export default App;
