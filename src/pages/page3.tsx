// App.tsx
import React from 'react';
import {
	CoinOneRight,
	CoinThreeLeft,
	CoinTwoLeft,
	CoinTwoRight,
	PawnGifNormal,
	CoinFourLeft
} from '../components/backgrounds/coins';
import ScrollToSell from '../components/scroll-to-sell';

type Page3Props = {
	comingFrom: string;
};

const Page3: React.FC<Page3Props> = ({ comingFrom }) => {
	const visible2: string | boolean = comingFrom !== 'home' && 'hidden';
	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='absolute w-full h-full -z-[1]'>
				<CoinFourLeft classname={`top-[38%] left-[5%] rotate-90	max-sm:hidden`} />
				<CoinTwoLeft classname={`max-sm:top-[55%] max-sm:left-[30%] max-sm:rotate-[300deg] top-[65%] left-[17%]`} />
				<CoinTwoLeft classname={`max-sm:top-[38%] max-sm:left-[5%] max-sm:rotate-[75deg] sm:hidden scale-x-[-1]`} />
				<CoinThreeLeft classname={`top-[20%] left-[12%] max-sm:hidden`} />
				<CoinOneRight classname={`top-[0] left-[30%] max-sm:hidden`} />
				<CoinTwoRight classname={`max-sm:top-[75%] max-sm:left-[12%] max-sm:-rotate-[30deg] top-[85%] left-[38%]`} />
				<CoinFourLeft classname={`max-sm:top-[0] max-sm:left-[12%] sm:hidden`} />
				<CoinFourLeft classname={`max-sm:top-[17%] max-sm:left-[30%] sm:hidden rotate-90`} />


				<PawnGifNormal classname={`${visible2} right-[0%]`} />
				<ScrollToSell />
			</div>
		</div>
	);
};

export default Page3;
