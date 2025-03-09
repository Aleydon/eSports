import { render, screen } from '@testing-library/react';

import App from '@/App';

const mockResponse = {
	ok: true,
	status: 200,
	json: async () => [
		{
			bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg',
			gameName: 'Dota 2',
			adsCount: 0
		},
		{
			bannerUrl:
				'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
			gameName: 'Grand Theft Auto V',
			adsCount: 0
		}
	]
};

global.fetch = jest.fn(
	async () => await Promise.resolve(mockResponse as Response)
);

describe('App component', () => {
	it('should render App Component', () => {
		const app = render(<App />);
		expect(app.container).toBeInTheDocument();
	});
	it('should render with svg logo', () => {
		const icon = render(<App />);
		expect(icon.container.querySelector('svg')).toBeInTheDocument();
	});
});

describe('Component fetch data', () => {
	it('should render GameBanner Component with response from api', async () => {
		const app = render(<App />);
		const dota = await screen.findByText(/Dota 2/i);
		const gtaV = await screen.findByText(/Grand Theft Auto V/i);

		expect(app.container).toBeInTheDocument();
		expect(dota).toBeInTheDocument();
		expect(gtaV).toBeInTheDocument();
	});
});
