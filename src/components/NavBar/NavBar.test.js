import { render, screen } from '@testing-library/react';
import NavBar from './Navbar';

test('The NavBar component should render with a title', () => {
    const title = 'Test application';
    render(<NavBar title={title} />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
});