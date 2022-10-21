import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/">
          <Button></Button>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
