// App.tsx
import React from 'react';
import {
	CoinFourLeft,
	CoinOneRight,
	CoinThreeLeft,
	CoinTwoLeft,
	CoinTwoRight,
	PawnGifNormal
} from '../components/backgrounds/coins';
import Bone from '../components/small-bone';
import ScrollToSell from '../components/scroll-to-sell';
import DogVicieux from '../assets/dog-vicieux.webp';

type Page2Props = {
	comingFrom: string;
	message: string[];
};

const Page2: React.FC<Page2Props> = ({ comingFrom, message }) => {
	const visible2: string | boolean = comingFrom !== 'home' && 'hidden';

	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='absolute w-full h-full -z-[1]'>
				<CoinTwoLeft classname={`max-sm:top-[55%] max-sm:left-[30%] max-sm:rotate-[300deg] top-[65%] left-[17%]`} />
				<CoinThreeLeft classname={`top-[20%] left-[12%] max-sm:hidden`} />
				<CoinOneRight classname={`top-[0] left-[30%] max-sm:hidden`} />
				<CoinTwoRight classname={`max-sm:top-[75%] max-sm:left-[12%] max-sm:-rotate-[30deg] top-[85%] left-[38%]`} />
				<CoinFourLeft classname={`max-sm:top-[0] max-sm:left-[12%] sm:hidden`} />
				<CoinFourLeft classname={`max-sm:top-[17%] max-sm:left-[30%] sm:hidden rotate-90`} />
				<Bone colorBone='white' imageDog={DogVicieux} text={message} />
				<PawnGifNormal classname={`${visible2} right-[0%]`} />
				<ScrollToSell />
			</div>
		</div>
	);
};

export default Page2;
