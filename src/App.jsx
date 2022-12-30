import { useState } from 'react'
import './App.css'
import {login} from './utils'

function App() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false)

  const handlesubmit = () => {

    setError(null);
    setIsRequesting(true);

    let values = {email: email, password: password}
    login(values).then(() => {
      console.log('sucesso')
      alert('Login efetuado com sucesso')
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setIsRequesting(false);
    })
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input 
          id={'email'} 
          type={'email'} 
          autoComplete='off' 
          value={email}
          onChange={((e) => setEmail(e.target.value))}
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
          id={'password'}
          type={'password'} 
          value={password} 
          onChange={((e) => setPassword(e.target.value))} />
        </div>

        <div className='button'>
          <button
          onClick={handlesubmit}
          disabled={email === '' || password.length < 6 || isRequesting}
          >Login</button>
        </div>
      </div>
    </div>
  )
}

export default App
