import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginUser, registerUser, verifyUser } from './services/auth';
import { Redirect } from 'react-router';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AuctionsContainer from './containers/AuctionsContainer';

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
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path="/auctions">
          <AuctionsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
