// App.tsx
import React from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

const App: React.FC = () => {
	return (
		<div className='relative flex flex-col justify-center items-center w-full !h-full !min-h-[100vh]'>
			<Page1 />
			<Page2
				comingFrom='home'
				message='The journey to the end is where the real gem awaits. Are you up for the challenge?'
			/>
			<Page3 comingFrom='home' />
			<Page4 />
			<Page2 comingFrom='home' message="Diamonds aren't formed without pressure so give that scroll a solid push!" />
			<Page3 comingFrom='home' />
			<Page2 comingFrom='home' message='Keep your eyes on the prize, and your finger on the scroll!' />
			<Page3 comingFrom='home' />
			<Page2
				comingFrom='home'
				message='Tired already? Well, buckle up! The best is still ahead, just a few more scrolls to go!'
			/>
			<Page3 comingFrom='home' />
			<Page2 comingFrom='home' message="Don't blink! You might miss the hidden wonders waiting below!" />
			<Page3 comingFrom='home' />
			<Page2 comingFrom='home' message='Will you really let it go?' />
		</div>
	);
};

export default App;
