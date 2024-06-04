import React from 'react';
import BonePink from '../assets/bone-pink.webp';
import DogVicieux from '../assets/dog-vicieux.webp';
import Button from './connection/button';

const BigBone: React.FC = () => {
	return (
		<div className='relative w-full h-full -z-[1]'>
			<img
				src={BonePink}
				alt='Dog Bone'
				className={`relative top-[15%] max-h-[50vw] max-w-[550px] sm:top-[35%] sm:max-h-[35%] sm:max-w-[550px] h-full w-full`}
			/>
			<img
				src={DogVicieux}
				alt='Dog head'
				className={`absolute top-[15%] max-h-[8vw] max-w-[10%] sm:top-[35%] sm:max-h-[8vw] sm:max-w-[10%] h-full w-full`}
			/>

			<p className='absolute text-center top-[50%] left-[3%] font-single text-PURPLE2 text-[26px] max-sm:text-[18px] max-w-[450px]'>
				How about buying more $DGM
			</p>
			<Button
				onClick={() => {
					console.log('achete !!!');
				}}
			>
				Connect
			</Button>
		</div>
	);
};

export default BigBone;
