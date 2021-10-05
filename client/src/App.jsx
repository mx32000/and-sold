import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <h1>hello</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
