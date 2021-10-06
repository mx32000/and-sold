import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { Redirect } from 'react-router';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AuctionsContainer from './containers/AuctionsContainer';
import Layout from './components/Layout';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async loginData => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/auctions");
  }

  const handleRegister = async registerData => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/auctions");
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('andSoldToken');
    removeToken();
    history.push("/signin");
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <Layout handleLogout={handleLogout}>
            <SignIn handleLogin={handleLogin} />
          </Layout>
        </Route>
        <Route path="/signup">
          <Layout handleLogout={handleLogout}>
            <SignUp handleRegister={handleRegister} />
          </Layout>
        </Route>
        <Route path="/auctions">
          <AuctionsContainer user={currentUser} handleLogout={handleLogout}/>
        </Route>
        <Route path="/">
          <Layout signedIn={currentUser} handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
