import React from 'react'
import ReactHowler from 'react-howler'

class AudiomackTracks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { songURL: '', currentTrack: null, playedTracks: [], totalTracks: 0, trackName: '', trackURL: '' }
    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
  }

  async getSongInfo() {
    await fetch(`/song/${this.state.currentTrack}`)
      .then(res => res.json())
      .then(res => this.setState({ songURL: res.source, trackName: res.track, trackURL: res.url }))
  }

  async getTotalTracks() {
    await fetch('/totalsongs')
      .then(res => res.text())
      .then(res => this.setState({ totalTracks: parseInt(res) }))
  }

  async updateCurrentTrack() {
    this.setState({ songURL: '', isVisible: false })
    let trackNumber = Math.floor(Math.random() * this.state.totalTracks) + 1

    if (!this.state.playedTracks.includes(trackNumber)) {
      await this.setState({
        isVisible: true,
        playedTracks: [...this.state.playedTracks, trackNumber],
        currentTrack: trackNumber
      })
      await this.getSongInfo()
    } else if (this.state.playedTracks.length === this.state.totalTracks) {
      await this.setState({playedTracks: []})
      await this.updateCurrentTrack()
    } else {
      this.updateCurrentTrack()
    }
  }

  async componentDidMount() {
    await this.getTotalTracks()
    await this.updateCurrentTrack()
  }

  render() {
    const songURL = this.state.songURL
    if (songURL) {
      return(
        <div>
          <ReactHowler key="howler" src={songURL} playing={this.props.playing} html5={true} onEnd={this.updateCurrentTrack}/>
          <a href={this.state.trackURL} className="trackname white" target="_blank" rel="noopener noreferrer">{this.state.trackName}</a>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default AudiomackTracks
