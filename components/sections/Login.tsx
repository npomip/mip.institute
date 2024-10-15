import LOGIN_USER from '@/lib/graphQL/LOGIN_USER'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loginUser] = useMutation(LOGIN_USER)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data } = await loginUser({
        variables: {
          input: {
            identifier: formData.email,
            password: formData.password
          }
        }
      })
      // Сохраните JWT токен в localStorage или в куках
      localStorage.setItem('token', data.login.jwt)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='Email или имя пользователя'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Пароль'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Войти</button>
      </form>
    </div>
  )
}

export default Login
