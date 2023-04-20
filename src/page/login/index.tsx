import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ILoginUserPayloadDto } from '../../common';
import { useLocalStorage } from '../../hook';
import { PATH } from '../../router/router';
import { login } from '../../service';
import "./style.scss";

export default function LoginPage() {
  const [data, setDate] = useState<ILoginUserPayloadDto>({
    username: "",
    password: ""
  })
  const [storedValue, setValue] = useLocalStorage("user", {})
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const res = await login(data)
      setValue(res.data)
      navigate(PATH.HOME)
    } catch (error) {
      alert("username is: test@gmail.com , password is: 1234")
    }

  }

  return (
    <div className="login">
    <div className="card">
      <h2>Log-In Account</h2>
        <div className="input-border">
          <input value={data.username} onChange={(event) => setDate({ ...data, username: event.target.value })} type="text" className="text" required />
          <label>Name</label>
          <div className="border"></div>
        </div>

        <div className="input-border">
          <input value={data.password} onChange={(event) => setDate({ ...data, password: event.target.value })} type="password" className="text" required />
          <label>Password</label>
          <div className="border"></div>
        </div>
        <input onClick={handleLogin}  className="btn" value="Log In" />

    </div>
    </div>
  )
}
