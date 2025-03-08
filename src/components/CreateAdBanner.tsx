import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export default function CreateAdBanner() {
	return (
		<div className="pt-1 bg-e-sportsGradient self-stretch overflow-hidden rounded-lg mt-8">
			<div className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
				<div>
					<strong className="text-2xl text-white font-black block">
						{`Didn't find your duo?`}
					</strong>
					<span className="text-zinc-400">Post an ad to find new players!</span>
				</div>
				<Dialog.Trigger className="flex items-center gap-3 px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded mt-4">
					<MagnifyingGlassPlus size={24} />
					Post ad
				</Dialog.Trigger>
			</div>
		</div>
	);
}
