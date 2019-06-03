import React from 'react'
import { Menu, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import AboutPopup from './AboutPopup'

const Footer = () => {
  return (
    <Menu className="footer" borderless inverted>
      <Menu.Item>
        <Link to="/"><i className="fas fa-city"></i> Cities</Link>
      </Menu.Item>
      <Menu.Item>
        <AboutPopup />
      </Menu.Item>
      <Menu.Menu position='right'>
          <Responsive minWidth={768}>
            <Menu.Item>
              Powered{'\u00b7'}by{'\u00b7'}<a href="https://audiomack.com/" target="_blank" rel="noopener noreferrer">Audiomack</a>{'\u00b7'}and{'\u00b7'}<a href="http://www.broadcastify.com/" target="_blank" rel="noopener noreferrer">Broadcastify</a>
            </Menu.Item>
          </Responsive>
        </Menu.Menu>
    </Menu>
  )
}

export default Footer
