import { MagnifyingGlassPlus } from 'phosphor-react';

import Logo from './assets/logo.svg';

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
				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-1.png" alt="Game 1" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">League of Legends</strong>
						<p className="text-zinc-300 text-xs block">4 Ads</p>
					</div>
				</a>

				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-2.png" alt="Game 2" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">Dota 2</strong>
						<p className="text-zinc-300 text-xs block">9 Ads</p>
					</div>
				</a>

				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-3.png" alt="Game 3" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">Counter Strike</strong>
						<p className="text-zinc-300 text-xs block">32 Ads</p>
					</div>
				</a>

				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-4.png" alt="Game 4" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">World of Warcraft</strong>
						<p className="text-zinc-300 text-xs block">48 Ads</p>
					</div>
				</a>

				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-5.png" alt="Game 5" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">Apex Legends</strong>
						<p className="text-zinc-300 text-xs block">74 Ads</p>
					</div>
				</a>

				<a href="#" className="relative rounded-lg overflow-hidden">
					<img src="/game-6.png" alt="Game 6" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
						<strong className="font-bold text-white">Fortnite</strong>
						<p className="text-zinc-300 text-xs block">4 Ads</p>
					</div>
				</a>
			</div>

			<div className="pt-1 bg-e-sportsGradient self-stretch overflow-hidden rounded-lg mt-8">
				<div className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
					<div>
						<strong className="text-2xl text-white font-black block">
							{`Didn't find your duo?`}
						</strong>
						<span className="text-zinc-400">
							Post an ad to find new players!
						</span>
					</div>
					<button className="flex items-center gap-3 px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded mt-4">
						<MagnifyingGlassPlus size={24} />
						Post ad
					</button>
				</div>
			</div>
		</div>
	);
}
