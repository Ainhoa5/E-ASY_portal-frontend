import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;