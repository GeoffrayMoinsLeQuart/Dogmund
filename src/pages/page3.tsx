// App.tsx
import React from 'react';
import {
	CoinOneRightDesktop,
	CoinThreeLeftDesktop,
	CoinTwoLeftDesktop,
	CoinTwoRightDesktop,
	PawnGifNormal,
	CoinFourLeftDesktop
} from '../components/backgrounds/coins';
import ScrollToSell from '../components/scroll-to-sell';

type Page3Props = {
	comingFrom: string;
};

const Page3: React.FC<Page3Props> = ({ comingFrom }) => {
	const visible: string = comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden';
	const visible2: string | boolean = comingFrom !== 'home' && 'hidden';
	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='absolute w-full h-full -z-[1]'>
				<CoinOneRightDesktop classname={`${visible} top-[0] left-[30%]`} />
				<CoinThreeLeftDesktop classname={`${visible} top-[20%] left-[12%]`} />
				<CoinFourLeftDesktop classname={`${visible} top-[40%] left-[5%] rotate-90	`} />
				<CoinTwoLeftDesktop classname={`${visible} top-[65%] left-[17%]`} />
				<CoinTwoRightDesktop classname={`${visible} top-[90%] left-[38%]`} />
				<PawnGifNormal classname={`${visible2} right-[0%]`} />
				<ScrollToSell />
			</div>
		</div>
	);
};

export default Page3;
