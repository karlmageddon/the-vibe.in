import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

class CityChooser extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show:false }
  }

  componentDidMount() {
    this.setState( { show: true } )
  }

  componentWillUnmount() {
    this.setState( { show: false } )
  }

  render() {
    return (
      <div className="title">
        <h1 className="maintext">Choose A City</h1>
          <List>
            <li><Link to="/los_angeles" className='citylink'>Los Angeles</Link></li>
            <li><Link to="/new_york" className='citylink'>New York</Link></li>
            <li><Link to="/san_francisco" className='citylink'>San Francisco</Link></li>
            <li><Link to="/seattle" className='citylink'>Seattle</Link></li>
            <li><Link to="/portland" className='citylink'>Portland</Link></li>
          </List>
      </div>
    );
  };
};

export default CityChooser;
