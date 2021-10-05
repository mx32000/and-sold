import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginUser, registerUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async loginData => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  }

  const handleRegister = async registerData => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  }

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
