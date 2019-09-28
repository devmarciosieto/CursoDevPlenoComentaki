import React, { useContext, useState } from 'react';
import { AuthContext } from './auth';

const SignInUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({ email: '', passwd: ''})

  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }
  if (auth.user !== null) {
    return null
  }

  return (
    <>
    <h3>Entrar na Sua Conta:</h3>
    {
      auth.signInUser.signInUserState.error !== '' &&
      <p>{auth.signInUser.signInUserState.error}</p>
    }
    <div className="form-group">
      <label htmlFor="formGroupInput">Seu Email</label>
      <input type="email" className="form-control" placeholder="Digite seu e-mail"
       value={form.email} onChange={onChange('email')} />
    </div>
    <div className="form-group">
      <label htmlFor="formGroupInput">Senha</label>
      <input type="password" className="form-control" placeholder="Digita sua Senha" 
       value={form.passwd} onChange={onChange('passwd')} />
    </div>
    <button className='btn btn-primary'
    onClick={() => {
      auth.signInUser.signInUser(form.email, form.passwd)
    }}>
      Entrar
    </button>
    </>
  )
}

export default SignInUser;