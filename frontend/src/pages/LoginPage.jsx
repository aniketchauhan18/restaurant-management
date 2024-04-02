import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const data = {
      email,
      password
    }

    setEmail('')
    setPassword('')

    try {
      const response = await fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const postData = await response.json();
      console.log(postData);
    } catch (err) {
      console.log("ERROR: ", err)
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage