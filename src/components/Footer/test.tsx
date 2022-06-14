import { render } from '@testing-library/react'

import Footer from '.'

describe('<Footer/>', () => {
  it('should render the footer', () => {
    render(<Footer />)

    // expect(screen.getByRole('container')).toBeInTheDocument()
  })
})
