import React, { Component } from 'react'
import { Modal, TransitionablePortal } from 'semantic-ui-react'

class AboutPopup extends Component {
  state = { open: false }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {

    return (
      <div>
        <span onClick={this.handleOpen} className="aboutlink"><i className="fas fa-info-circle"></i> About</span>
        <TransitionablePortal
          open={this.state.open}
          transition={{ animation: 'fade', duration: 500 }}
        >
          <Modal
            className="about"
            basic
            size='tiny'
            open={true}
            onClose={(event) => {
              this.handleClose()
            }}
            dimmer='blurring'
          >
            <Modal.Content>
              <p>the-vibe.in is a project by Karl Puzon built as an homage to Eric Eberhardt's <a href="www.youarelistening.to" target="_blank" rel="noopener noreferrer">youarelistening.to</a></p>
              <p>Listen to lo-fi hiphop beats mixed with live police scanners.</p>
            </Modal.Content>
          </Modal>
        </TransitionablePortal>
      </div>
    )
  }
}



export default AboutPopup
