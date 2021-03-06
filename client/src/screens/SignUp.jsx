import { useState } from "react"
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../assets/screens/SignUp.css";

export default function SignUp(props) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleRegister(form);
  }

  return(
    <form onSubmit={handleSubmit} id="sign-up">
      <h1>Sign up</h1>
      <input
        required
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        required
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />      
      <input
        required
        type="password"
        name="password_confirmation"
        id="passwordConfirmation"
        placeholder="Confirm Password"
        value={form.password_confirmation}
        onChange={handleChange}
      />
      <Button text="Get started!" />
      <Link to="/signin">Already have an account? Sign in here!</Link>
    </form>
  )
}