import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

import AudiomackTracks from './AudiomackTracks'
import PoliceScanner from './PoliceScanner'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = { city:'', playing: false, activeItem:'' }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay = (e, { action }) => {
    this.setState({
      playing: true,
      activeItem: 'play'
    })
  }

  handlePause() {
    this.setState({
      playing: false,
      activeItem: 'pause'
    })
  }

  render() {
    return(
      <div>
        <Grid centered columns={2}>
          <Menu text>
            <Menu.Item name='play' active={this.state.activeItem === 'play'} onClick={this.handlePlay} className="control">
              <i className="fas fa-play white"></i>
            </Menu.Item>
            <Menu.Item name='pause' active={this.state.activeItem === 'pause'} onClick={this.handlePause} className="control">
              <i className="fas fa-pause white"></i>
            </Menu.Item>
          </Menu>
        </Grid>
        <PoliceScanner city={this.props.city} playing={this.state.playing} />
        <AudiomackTracks playing={this.state.playing} />
      </div>
    )
  }
}

export default Player
