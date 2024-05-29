import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonConnect from './components/button-connect';
import Button from './components/button';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Button onClick={() => console.log('ButtonConnect clicked')}>sdkjfghsd</Button>
				<ButtonConnect onClick={() => console.log('ButtonConnect clicked')} />
			</header>
		</div>
	);
}

export default App;
