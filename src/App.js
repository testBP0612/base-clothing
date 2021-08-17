import './App.css';
import { Switch, Route, Link } from 'react-router';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
