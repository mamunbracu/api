import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Api from './component/Api';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/api" component={Api} exact/>
      </Switch>
    </Router>
  );
}

export default App;
