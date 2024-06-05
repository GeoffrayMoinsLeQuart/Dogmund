// App.tsx
import React from 'react';
import BonePink from '../assets/bone-pink.webp';
import DogVicieux from '../assets/dog-vicieux.webp';
import Button from '../components/connection/button';

const Page4: React.FC = () => {
	return (
		<div className='relative xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center !min-h-[100vh]'>
			<div className='relative w-full top-[29%] sm:top-[30%] '>
				<img src={BonePink} alt='Dog Bone' className={`relative w-full h-auto`} />
				<img
					src={DogVicieux}
					alt='Dog head'
					className={`absolute top-[16%] left-[31%]  max-h-[12vw] max-w-[14%] h-auto w-full -z-[1]`}
				/>

				<div
					className={`absolute -top-[3%] left-[50%] transform -translate-x-1/2 font-single text-PURPLE2 h-full min-h-full w-full min-w-full`}
				>
					<p
						className={`h-full min-h-full min-w-full flex justify-center items-center -rotate-[6deg] text-center font-single text-[#281B3D] text-[48px] max-sm:text-[24px]`}
					>
						How about buying more
						<br />
						instead, ser?
					</p>
				</div>
				<Button
					onClick={() => {
						console.log('achete !!!');
					}}
					classname='absolute top-[60%] left-[50%] transform -translate-x-1/2'
				>
					BUY $DGM
				</Button>
			</div>
		</div>
	);
};

export default Page4;
