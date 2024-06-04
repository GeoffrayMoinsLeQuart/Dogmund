// components/Background.tsx
import React from 'react';
import oneRight from '../assets/one-right.png';
import oneLeft from '../assets/one-left.png';
import twoRight from '../assets/two-right.png';
import twoLeft from '../assets/two-left.png';
import threeRight from '../assets/three-right.png';
import threeLeft from '../assets/three-left.png';

type BackgroundProps = {
	comingFrom: string;
};

const Background: React.FC<BackgroundProps> = ({ comingFrom }) => {
	return (
		<div className='absolute w-full h-full -z-[1]'>
			<img
				src={oneLeft}
				alt='One Left'
				className={`${comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'} absolute top-[5%] left-[5%] w-[13%]`}
			/>
			<img
				src={twoLeft}
				alt='Two Left'
				className={`${
					comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'
				} absolute top-[72%] -left-[10%] max-h-[25%] h-[17vw]`}
			/>
			<img
				src={threeLeft}
				alt='Three Left'
				className={`${comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'} absolute top-[140%] left-[5%] w-[13%]`}
			/>
			<img
				src={oneRight}
				alt='One Right'
				className={`${
					comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'
				} absolute top-[5%] right-[5%] max-h-[25%] h-[14vw] `}
			/>
			<img
				src={twoRight}
				alt='Two Right'
				className={`${comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'} absolute top-[72%] -right-[10%] w-[13%]`}
			/>
			<img
				src={threeRight}
				alt='Three Right'
				className={`${comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden'} absolute top-[140%] right-[5%] w-[14%]`}
			/>
		</div>
	);
};

export default Background;
