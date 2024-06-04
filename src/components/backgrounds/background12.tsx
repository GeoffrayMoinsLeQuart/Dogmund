// components/Background.tsx
import React from 'react';
import { CoinOneRightMobile, CoinThreeRightMobile, CoinTwoLeftMobile, CoinTwoRightMobile } from './coins';

type BackgroundProps = {
	comingFrom: string;
};

const Background12: React.FC<BackgroundProps> = ({ comingFrom }) => {
	const visible: string = comingFrom === 'home' ? 'max-sm:hidden' : 'sm:hidden';

	return (
		<div className='absolute w-full h-full -z-[1]'>
			<CoinOneRightMobile classname={`${visible} top-[5%] left-[5%]`} />
			<CoinTwoLeftMobile classname={`${visible} top-[72%] -left-[10%]`} />
			<CoinThreeRightMobile classname={`${visible} top-[140%] left-[5%]`} />
			<CoinOneRightMobile classname={`${visible} top-[5%] right-[5%]`} />
			<CoinTwoRightMobile classname={`${visible} top-[72%] -right-[10%]`} />
			<CoinThreeRightMobile classname={`${visible} top-[140%] right-[5%]`} />
		</div>
	);
};

export default Background12;
