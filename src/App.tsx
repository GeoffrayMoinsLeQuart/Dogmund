// App.tsx
import React, { Suspense } from 'react';
const Navbar = React.lazy(() => import('./components/navbar'));
const Title = React.lazy(() => import('./components/title'));
const ConnectWallet = React.lazy(() => import('./components/connect-wallet/connect-wallet'));

const App: React.FC = () => {
	const [isOpenModal, setIsOpenModal] = React.useState(false);

	return (
		<div className='flex justify-center items-center'>
			<div className='xl:max-w-[1140px] max-sm:max-w-[90%] w-[100%] flex flex-col items-center'>
				<Suspense fallback={<div>Loading...</div>}>
					<Navbar onOpenModal={() => setIsOpenModal(!isOpenModal)} />
					<Title />
					<ConnectWallet isModalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
				</Suspense>
			</div>
		</div>
	);
};

export default App;
