import './App.css';
import { Switch, Route, Link } from 'react-router';

import HomePage from './pages/homepage/homepage.compoent';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
