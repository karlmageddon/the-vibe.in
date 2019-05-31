import React from 'react'
import ReactHowler from 'react-howler'

class PoliceScanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scannerURL: '' }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  async getScannerURL() {
    await fetch(`/api/scanner/${this.props.city}`)
      .then(res => res.text())
      .then(res => this.setState({ scannerURL: res }))
  }

  componentDidMount() {
    this.getScannerURL()
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if(oldProps.city !== newProps.city) {
      this.setState({ scannerURL: ' ' })
      this.getScannerURL();
    }
  }

  handlePlay() {
    this.setState({
      playing: true
    })
  }

  handlePause() {
    this.setState({
      playing: false
    })
  }

  render() {
    const scannerURL = this.state.scannerURL
    if (scannerURL) {
      return <div>
        <ReactHowler src={scannerURL} playing={this.props.playing} html5={true} />
      </div>
    } else {
      return <div></div>
    }
  }
}

export default PoliceScanner
