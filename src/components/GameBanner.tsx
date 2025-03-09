interface GameBannerProps {
	bannerUrl: string;
	gameName: string;
	adsCount: number;
}

export function GameBanner({ bannerUrl, gameName, adsCount }: GameBannerProps) {
	return (
		<a href="#" className="relative rounded-lg overflow-hidden">
			<img src={bannerUrl} alt="Game 1" />
			<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
				<strong className="font-bold text-white">{gameName}</strong>
				<p className="text-zinc-300 text-xs block">{adsCount} Ads</p>
			</div>
		</a>
	);
}
