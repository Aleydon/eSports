import { render } from '@testing-library/react';

import App from '@/App';

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
