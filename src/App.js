import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!name) {
      formIsValid = false;
      newErrors['name'] = 'Please enter your name';
    }

    if (!email) {
      formIsValid = false;
      newErrors['email'] = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors['email'] = 'Please enter a valid email address';
    }

    if (!password) {
      formIsValid = false;
      newErrors['password'] = 'Please enter your password';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
    }
  };


  return (
    <div className='main'>
      {successMessage && <div className="success">{successMessage}</div>}
      <form className='container' onSubmit={handleSubmit}>
          <h2>Login Here</h2>
          

          <input type="text" className="input" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className="error">{errors.name}</span>}
        
          <input type="email" className="input" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}

          <input type="password" className="input" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className="error">{errors.password}</span>}
        
          <button id="submit" type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
