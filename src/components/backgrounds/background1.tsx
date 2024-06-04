// components/Background.tsx
import React from 'react';
import {
	CoinOneLeftDesktop,
	CoinOneRightDesktop,
	CoinTwoLeftDesktop,
	CoinTwoRightDesktop,
	CoinThreeLeftDesktop,
	CoinThreeRightDesktop,
	PawnGifDesktop
} from './coins';

type BackgroundProps = {
	comingFrom: string;
};

const Background1: React.FC<BackgroundProps> = ({ comingFrom }) => {
	const visible: string = comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden';
	const visible2: string | boolean = comingFrom !== 'home' && 'hidden';

	return (
		<div className='absolute w-full h-full -z-[1]'>
			<CoinOneLeftDesktop classname={`${visible} top-[15%] left-[16%]`} />
			<CoinTwoLeftDesktop classname={`${visible} top-[45%] left-[10%]`} />
			<CoinThreeLeftDesktop classname={`${visible} top-[75%] left-[16%]`} />
			<CoinOneRightDesktop classname={`${visible} top-[15%] right-[16%]`} />
			<CoinTwoRightDesktop classname={`${visible} top-[45%] right-[10%]`} />
			<CoinThreeRightDesktop classname={`${visible} top-[75%] right-[16%]`} />
			<PawnGifDesktop classname={`${visible2} left-[50%] transform -translate-x-1/2`} />
		</div>
	);
};

export default Background1;
