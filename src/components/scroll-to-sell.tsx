import React from 'react';
import Image from '../assets/scroll-to-sell.png';

const ScrollToSell: React.FC = () => {
	return (
		<div className='flex items-center absolute bottom-[0]'>
			<img src={Image} alt='Dog Bone' className={``} />
			<span className='flex flex-col items-center justify-center ml-[10px]'>
				<p className='text-center font-single text-[20px] sm:text-[40px] text-WHITE  leading-[1]'>
					{'Scroll'.toUpperCase()}
				</p>
				<p className='text-center font-single text-[20px] sm:text-[40px] text-WHITE leading-[1]'>
					{'To Sell'.toUpperCase()}
				</p>
			</span>
		</div>
	);
};

export default ScrollToSell;
