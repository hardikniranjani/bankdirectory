import "./App.css";
import HomePage from './HomePage';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import BanksList from './BanksList';
function App() {



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/bankdirectory" component={HomePage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/banks/:city" component={BanksList} />
          {/* <Route exact path="/banks/:mumbai" component={BanksList} />
          <Route exact path="/banks/:delhi" component={BanksList} />
          <Route exact path="/banks/:ahemdabad" component={BanksList} />
          <Route exact path="/banks/:bangalore" component={BanksList} />
          <Route exact path="/banks/:chennai" component={BanksList} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
