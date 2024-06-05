import React from 'react';
import BonePink from '../assets/bone-pink.webp';
import BoneWhite from '../assets/bone-white.webp';

type BoneProps = {
	text: string;
	imageDog: string;
	colorBone: string;
};

const Bone: React.FC<BoneProps> = ({ text, imageDog, colorBone }) => {
	return (
		<div className='relative top-[29%] sm:top-[30%] '>
			<img
				src={colorBone === 'white' ? BoneWhite : BonePink}
				alt='Dog Bone'
				className={`relative max-h-[50vw] max-sm:max-h-[70vw] sm:max-w-[55%] w-full h-auto`}
			/>
			<img
				src={imageDog}
				alt='Dog head'
				className={`absolute top-[29%] sm:top-[30%] max-h-[8vw] max-w-[10%] sm:max-h-[8vw] sm:max-w-[10%] h-full w-full`}
			/>

			<p className='absolute text-center top-[29%] sm:top-[40%] left-[8%] -rotate-[6deg] font-single text-PURPLE2 text-[26px] max-sm:text-[18px] max-w-[450px]'>
				{text}
			</p>
		</div>
	);
};

export default Bone;
