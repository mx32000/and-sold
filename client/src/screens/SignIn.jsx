import { useState } from "react"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../assets/screens/SignIn.css";

export default function SignIn(props) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(form);
  }

  return(
    <form onSubmit={handleSubmit} id="sign-in">
      <h1>Sign in</h1>
      <input
        required
        type="text" 
        name="username" 
        id="username" 
        value={form.username} 
        onChange={handleChange} 
        placeholder="Username"
      />
      <input
        required
        type="password"
        name="password"
        id="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <Button text="Sign in" />
      <Link to="/signup">Don't have an account? Sign up here!</Link>
    </form>
  )
}