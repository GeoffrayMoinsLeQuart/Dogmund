import React from 'react';
import './App.css';
import ButtonDisconnect from './components/connection/button-disconnect';
import Button from './components/connection/button';
import TextField from './components/text-field';
import Navbar from './components/navbar';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
			</header>
			<body>
				{/* <Button onClick={() => console.log('ButtonDisconnect clicked')}>sdkjfghsd</Button>
				<ButtonDisconnect onClick={() => console.log('ButtonDisconnect clicked')} /> */}
				{/* <TextField /> */}
			</body>
		</div>
	);
}

export default App;
