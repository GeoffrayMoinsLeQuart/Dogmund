import React from 'react';
import oneRight from '../../assets/one-right.png';
import oneLeft from '../../assets/one-left.png';
import twoRight from '../../assets/two-right.png';
import twoLeft from '../../assets/two-left.png';
import threeRight from '../../assets/three-right.png';
import threeLeft from '../../assets/three-left.png';
import fourLeft from '../../assets/four-left.png';
import pawTogetherLower from '../../assets/paw-together-lower2.gif';

type CoinsProps = {
	classname: string;
};

export const CoinOneLeftDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={oneLeft} alt='One Left' className={`${classname} absolute max-w-[175px] w-[14%] h-auto`} />;
};

export const CoinOneRightDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={oneRight} alt='One Right' className={`${classname} absolute max-h-[163px] h-[13vw] w-auto`} />;
};

export const CoinTwoLeftDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={twoLeft} alt='Two Left' className={`${classname} absolute max-h-[163px] h-[14vw] w-auto`} />;
};

export const CoinTwoRightDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={twoRight} alt='Two Right' className={`${classname} absolute max-w-[175px] w-[14%] h-auto`} />;
};

export const CoinThreeLeftDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={threeLeft} alt='Three Left' className={`${classname} absolute max-h-[150px] h-[14vw] w-auto`} />;
};

export const CoinThreeRightDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={threeRight} alt='Three Right' className={`${classname} absolute max-w-[175px] w-[14%] h-auto`} />;
};

export const CoinFourLeftDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={fourLeft} alt='Four Left' className={`${classname} absolute max-w-[175px] w-[14%] h-auto`} />;
};

export const CoinOneRightMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={oneRight} alt='One Right' className={`${classname} absolute max-h-[25%] h-[14vw]`} />;
};

export const CoinOneLeftMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={oneLeft} alt='One Left' className={`${classname} absolute w-[13%]`} />;
};

export const CoinTwoRightMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={twoRight} alt='Two Right' className={`${classname} absolute w-[13%]`} />;
};

export const CoinTwoLeftMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={twoLeft} alt='Two Left' className={`${classname} absolute max-h-[25%] h-[17vw]`} />;
};

export const CoinThreeRightMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={threeRight} alt='Three Right' className={`${classname} absolute w-[14%]`} />;
};

export const CoinThreeLeftMobile: React.FC<CoinsProps> = ({ classname }) => {
	return <img src={threeLeft} alt='Three Left' className={`${classname} absolute w-[13%]`} />;
};

export const PawnGifDesktop: React.FC<CoinsProps> = ({ classname }) => {
	return (
		<img src={pawTogetherLower} alt='Paw Tiger with Diamond' className={`${classname} absolute bottom-[0] h-[60%]`} />
	);
};

export const PawnGifNormal: React.FC<CoinsProps> = ({ classname }) => {
	return (
		<img
			src={pawTogetherLower}
			alt='Paw Tiger with Diamond'
			className={`${classname} absolute bottom-[0] h-[37%] sm:h-[60%]`}
		/>
	);
};
