import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginUser, registerUser, verifyUser } from './services/auth';
import SignIn from './screens/SignIn';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  })

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
        <Route path="/signin">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <h1>sign up page</h1>
        </Route>
        <Route path="/">
          <h1>hello</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
