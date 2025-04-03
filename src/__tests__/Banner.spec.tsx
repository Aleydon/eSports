import { render } from '@testing-library/react';

import { GameBanner } from '@/components/GameBanner';

const bannerData = {
	bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg',
	gameName: 'Dota 2',
	adsCount: 0
};
describe('Banner component', () => {
	it('should render GameBanner component with static props', async () => {
		const banner = render(
			<GameBanner
				bannerUrl={bannerData.bannerUrl}
				gameName={bannerData.gameName}
				adsCount={bannerData.adsCount}
			/>
		);
		expect(banner.container).toBeInTheDocument();
		expect(banner.container).toHaveTextContent('Dota 2');
	});
});
