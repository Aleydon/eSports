import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

import Logo from './assets/logo.svg';
import { api } from './services/api';
import { Input } from './components/Input';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

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
			await api<GameProps[]>('/games').then(response => {
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
			<Dialog.Root>
				<CreateAdBanner />
				<Dialog.Portal>
					<Dialog.Overlay className="bg-black/60 inset-0 fixed" />
					<Dialog.Content
						className="fixed bg-[#2A2634] py-8 px-10 text-white
							top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
							rounded-lg w-[480px] shadow-lg shadow-black/20"
					>
						<Dialog.Title className="text-3xl font-black">
							Post an AD
						</Dialog.Title>

						<form className="mt-8 flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<label className="font-semibold" htmlFor="game">
									What&apos;s the game?
								</label>
								<Input
									id="game"
									placeholder="Select the game you want to play"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label htmlFor="name">Your name (or nickname)</label>
								<Input id="name" placeholder="How are you called?" />
							</div>

							<div className="grid grid-cols-2 gap-6">
								<div className="flex flex-col gap-2">
									<label htmlFor="yearsPlaying">Time playing?</label>
									<Input id="yearsPlaying" type="number" placeholder="0" />
								</div>
								<div className="flex flex-col gap-2">
									<label htmlFor="discord">What is your Discord?</label>
									<Input id="discord" type="text" placeholder="User#0000" />
								</div>
							</div>

							<div className="flex gap-6">
								<div className="flex flex-col gap-2">
									<label htmlFor="weekDays">What days do you play?</label>
									<div className="grid grid-cols-4 gap-2">
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Monday"
										>
											M
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Sunday"
										>
											S
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Tuesday"
										>
											T
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Wednesday"
										>
											W
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Thursday"
										>
											T
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Friday"
										>
											F
										</button>
										<button
											className="2-8 h-8 rounded bg-zinc-900"
											title="Saturnday"
										>
											S
										</button>
									</div>
								</div>
								<div className="flex flex-1 flex-col gap-2">
									<label htmlFor="hourStart">What time of day?</label>
									<div className="grid grid-cols-2 gap-2">
										<Input id="hourStart" type="time" placeholder="From" />
										<Input id="hourEnd" type="time" placeholder="To" />
									</div>
								</div>
							</div>

							<div className="mt-2 flex gap-2 text-sm">
								<input
									type="checkbox"
									id="useVoiceChannel"
									placeholder="I use voice chat"
								/>
								<label htmlFor="useVoiceChannel">I use voice channel</label>
							</div>

							<footer className="flex justify-end mt-4 gap-4">
								<Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold">
									Cancel
								</Dialog.Close>
								<button
									className="flex items-center gap-3
									bg-violet-500 hover:bg-violet-600  px-5 h-12 rounded-md font-semibold"
									type="submit"
								>
									<GameController size={24} />
									Find Duo
								</button>
							</footer>
						</form>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
