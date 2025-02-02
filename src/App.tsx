import Logo from './assets/logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';

export default function App() {
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
				<GameBanner
					bannerUrl="/game-1.png"
					gameName="League of Legends"
					adsCount={0}
				/>
				<GameBanner bannerUrl="/game-2.png" gameName="Dota 2" adsCount={1} />
				<GameBanner bannerUrl="/game-3.png" gameName="CS: GO" adsCount={2} />
				<GameBanner
					bannerUrl="/game-4.png"
					gameName="World of Warcraft"
					adsCount={3}
				/>
				<GameBanner
					bannerUrl="/game-5.png"
					gameName="Apex Legends"
					adsCount={4}
				/>
				<GameBanner bannerUrl="/game-6.png" gameName="Fortnite" adsCount={5} />
			</div>

			<CreateAdBanner />
		</div>
	);
}
