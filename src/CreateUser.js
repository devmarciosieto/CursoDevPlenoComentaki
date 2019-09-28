import React, { useContext, useState } from 'react';
import { AuthContext } from './auth';

const CreateUser = () => {
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
    <h3>Criar Nova Conta:</h3>
    {
      auth.createUser.createUserState.error !== '' &&
      <p>{auth.createUser.createUserState.error}</p>
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
      auth.createUser.createUser(form.email, form.passwd)
    }}>
      Novo Usuário
    </button>
    </>
  )
}

export default CreateUser;