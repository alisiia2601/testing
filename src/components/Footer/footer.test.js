import {render, screen} from '@testing-library/react'

import Footer from '.'

test('The text by the footer is rendered', () => {
    render(<Footer title='My footer'/>)

    const footerContent = screen.getByRole('heading', {level: 4})

    expect(footerContent).toBeInTheDocument(); 
})