import React from 'react';
import Image from '../assets/scroll-to-sell.png';

type BoneProps = {
	text: string;
	imageDog: string;
	colorBone: string;
};

const ScrollToSell: React.FC = () => {
	return (
		<div className='flex items-center absolute bottom-[0]' >
			<img src={Image} alt='Dog Bone' className={``} />
			<p
				className='text-center font-single text-WHITE ml-[10px]'
			>
				{'Scroll To Sell'.toUpperCase()}
			</p>
		</div>
	);
};

export default ScrollToSell;
