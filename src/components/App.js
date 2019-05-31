import React from 'react'
import { Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import City from './City'

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 1000,
    beforeChildren: true,
    transition: { duration: 500 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 500 }
  }
});

const App = () => (
  <Route
    render={({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location}>
            <Route exact path="/" component={City} key="home" />
            <Route
              path="/los_angeles"
              render={(props) => <City {...props} city={'los_angeles'} />}
              key="la"
            />
            <Route
              path="/new_york"
              render={(props) => <City {...props} city={'new_york'} />}
              key="ny"
            />
            <Route
              path="/san_francisco"
              render={(props) => <City {...props} city={'san_francisco'} />}
              key="sf"
            />
            <Route
              path="/seattle"
              render={(props) => <City {...props} city={'seattle'} />}
              key="sf"
            />
            <Route
              path="/portland"
              render={(props) => <City {...props} city={'portland'} />}
              key="sf"
            />
            <Route
              path="/oakland"
              render={(props) => <City {...props} city={'oakland'} />}
              key="sf"
            />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    )}
  />
);

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { location: '' }
//   }
//
//   render() {
//     return(
//       <div>
//
//             <PoseGroup>
//             <RouteContainer key={this.state.location}>
//             <Switch>
//               <Route exact path="/" component={City} key="home" />
//               <Route
//                 path="/los_angeles"
//                 render={(props) => <City {...props} city={'los_angeles'} />}
//                 key="la"
//               />
//               <Route
//                 path="/new_york"
//                 render={(props) => <City {...props} city={'new_york'} />}
//                 key="ny"
//               />
//               <Route
//                 path="/san_francisco"
//                 render={(props) => <City {...props} city={'san_francisco'} />}
//                 key="sf"
//               />
//             </Switch>
//             </RouteContainer>
//             </PoseGroup>
//         </Router>
//       </div>
//     );
//   };
// };

export default App;
