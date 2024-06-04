// App.tsx
import React from 'react';
import {
	CoinOneRightDesktop,
	CoinThreeLeftDesktop,
	CoinTwoLeftDesktop,
	CoinTwoRightDesktop,
	PawnGifNormal
} from '../components/backgrounds/coins';
import Bone from '../components/small-bone';
import ScrollToSell from '../components/scroll-to-sell';
import DogVicieux from '../assets/dog-vicieux.webp';

type Page2Props = {
	comingFrom: string;
	message: string;
};

const Page2: React.FC<Page2Props> = ({ comingFrom, message }) => {
	const visible: string = comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden';
	const visible2: string | boolean = comingFrom !== 'home' && 'hidden';

	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='absolute w-full h-full -z-[1]'>
				<CoinOneRightDesktop classname={`${visible} top-[0] left-[30%]`} />
				<CoinThreeLeftDesktop classname={`${visible} top-[20%] left-[12%]`} />
				<CoinTwoLeftDesktop classname={`${visible} top-[65%] left-[17%]`} />
				<CoinTwoRightDesktop classname={`${visible} top-[85%] left-[38%]`} />
				<Bone colorBone='white' imageDog={DogVicieux} text={message} />
				<PawnGifNormal classname={`${visible2} right-[0%]`} />
				<ScrollToSell />
			</div>
		</div>
	);
};

export default Page2;
