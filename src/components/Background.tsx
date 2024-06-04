// components/Background.tsx
import React from 'react';
import background from '../assets/background.webp';
import oneRight from '../assets/one-right.png';
import oneLeft from '../assets/one-left.png';
import twoRight from '../assets/two-right.png';
import twoLeft from '../assets/two-left.png';
import threeRight from '../assets/three-right.png';
import threeLeft from '../assets/three-left.png';
import pawTogetherLower from '../assets/paw-together-lower2.gif';

const Background: React.FC = () => {
	return (
		<div className='absolute w-full h-full -z-[1]'>
			<img src={oneLeft} alt='One Left' className='absolute top-[15%] sm:top-[15%] left-[16%] sm:left-[16%] w-[14%]' />
			<img src={twoLeft} alt='Two Left' className='absolute top-[28%] sm:top-[45%] left-[10%] sm:left-[10%] max-h-[20%] h-[15vw]' />
			<img src={threeLeft} alt='Three Left' className='absolute top-[40%] sm:top-[75%] left-[16%] sm:left-[16%] w-[14%]' />
			<img src={oneRight} alt='One Right' className='absolute top-[15%] right-[16%]  max-h-[20%] h-[14vw] ' />
			<img src={twoRight} alt='Two Right' className='absolute top-[28%] right-[10%] w-[15%]' />
			<img src={threeRight} alt='Three Right' className='absolute top-[40%] right-[16%] w-[15%]' />
			<img
				src={pawTogetherLower}
				alt='Paw Together Lower'
				className='absolute bottom-[0] left-[50%] transform -translate-x-1/2 h-[60%] !max-w-[150%]'
			/>
		</div>
	);
};

export default Background;
