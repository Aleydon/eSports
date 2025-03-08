import { useEffect, useState } from 'react';

import { api } from './services/api';
import Logo from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';

interface GameProps {
	id: string;
	title: string;
	bannerUrl: string;
	_count: {
		ads: number;
	};
}

export default function App() {
	const [games, setGames] = useState<GameProps[]>([]);

	useEffect(() => {
		async function getGames() {
			await api<GameProps[]>('http://localhost:3333/games').then(response => {
				setGames(response.data);
			});
		}
		void getGames();
	}, []);

	return (
		<div className="flex flex-col items-center  max-w-[1344px] mx-auto my-20">
			<img src={Logo} alt="Logo" />
			<h1 className="text-6xl text-white font-black mt-20">
				Your{' '}
				<span className="bg-e-sportsGradient text-transparent bg-clip-text">
					duo
				</span>{' '}
				is here
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games.map(game => (
					<GameBanner
						key={game.id}
						bannerUrl={game.bannerUrl}
						gameName={game.title}
						adsCount={game._count.ads}
					/>
				))}
			</div>

			<CreateAdBanner />
		</div>
	);
}
