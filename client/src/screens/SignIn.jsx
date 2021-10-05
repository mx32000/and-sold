import { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        name="username" 
        id="username" 
        value={form.username} 
        onChange={handleChange} 
        placeholder="Username"
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        name="password"
        id="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}