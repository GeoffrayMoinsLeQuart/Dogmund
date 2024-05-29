import './App.css';
import ConnectWallet from './components/connect-wallet';
import Navbar from './components/navbar';
import Title from './components/title';

function App() {
	return (
		<div className='flex justify-center items-center'>
			<div className='xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%]'>
				<Navbar />
				<Title />
				<ConnectWallet/>
			</div>
		</div>
	);
}

export default App;
